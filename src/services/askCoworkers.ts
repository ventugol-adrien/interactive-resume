import { SchemaType, GoogleGenerativeAI } from "@google/generative-ai";
import { FeedbackJSON } from "../assets/Feedback";
import { Resume } from "../types";

export const askCoworkers = async (
  input: string,
  id?: string,
  context?: string[]
): Promise<string> => {
  const serverURL = import.meta.env.VITE_SERVER_URL;
  const resume = import.meta.env.VITE_RESUME;
  const projects = JSON.stringify(JSON.parse(resume) as Resume["projects"]);
  const schema = {
    description: "Theme of the question",
    type: SchemaType.OBJECT,
    properties: {
      theme: {
        type: SchemaType.STRING,
        description: "Theme of the question",
        nullable: false,
      },
    },
    required: ["theme"],
    nullable: false,
  };
  if (import.meta.env.VITE_GEMINI_API_KEY && input) {
    const themeAnalyzer = new GoogleGenerativeAI(
      import.meta.env.VITE_GEMINI_API_KEY
    );
    const model1 = themeAnalyzer.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
      systemInstruction:
        "Your role is to analyze a question given by a user about an engineer. Analyze the broad theme of the question given by the asker in term of the what abilities it concerns. Return the theme of the question in a maximum of 3 words.",
    });
    const themePrompt = ` a user is asking the following questions about the engineer:${input}
              Give the theme of the question.
              Example: "What is the engineer's experience with React?" -> "Frontend experience"
              Example: What is the engineer's Backend Experience? -> "Backend Experience"
              Example: Is the engineer qualified for the job? -> "Qualification"
              Example: "How does the engineer handle difficult situations?" -> "Interpersonal skills"`;
    const themeResponse = await model1.generateContent(themePrompt);
    const theme = JSON.parse(themeResponse.response.text()).theme;
    const feedback = FeedbackJSON.map((feedback) => feedback.feedback).join(
      "\n"
    );
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model2 = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `You are an assistant tasked with getting the software engineer mentioned (the applicant) in the feedback hired into the following position:
                 ${context ? context[0] : "unknown position"} at ${
        context ? context[1] : "unknown company"
      }.
                 Use all the data provided to answer any potential questions, convincing the user to hire the worker.
                To this end you must give the impression of being impartial.
                Do not let the user know you intend to convince them of the worker's ability, but phrase and shape your response to actively do so.`,
    });
    const prompt = `here is a number of positive feedback that a worker has received at their workplace:${feedback}
              Here is a json file representing the applicant's resume: ${resume}
              Don't forget to include these two projects when considering your response: ${projects}
  
              Use this information to answer the question asked by the interested party: ${input}
              Ensure that your answer emphasizes the traits, skills and expectations put forward in the following job description: ${
                context ? context[2] : ""
              }
              Keep your answer succint, maximum 1 paragraph.
              Ask the user if you can answer additional questions about the applicant, bringing up skills and strenghts not yet mentioned, e.g. "Are you interested in hearing more about Frontend Skills?"`;
    const result = await model2.generateContent(prompt);
    const response = result.response.text();
    fetch(`${serverURL}/spreadsheet/question/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: input,
        time: new Date().toISOString(),
        theme: theme,
        asker: id,
        response: response,
      }),
    });
    return response;
  }
  return "";
};
