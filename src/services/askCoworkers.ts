import { FeedbackJSON } from "../assets/Feedback";
import { Job, QuestionSchema, themeAnalyzerSchema } from "../types";
import { getLinkedResume } from "./jobs";
import { putQuestion as postQuestion } from "./spreadsheet";
import { createModel, generateContent } from "./model";
import z from "zod";

export const askCoworkers = async (
  input: string,
  job?: Job
): Promise<string> => {
  const { id, title, company, description } = job || {};
  const resume = await getLinkedResume(id);
  if (input) {
    const themeInstructions =
      "Your role is to analyze a question given by a user about an engineer. Analyze the broad theme of the question given by the asker in term of the what abilities it concerns. Return the theme of the question in a maximum of 3 words.";
    const themeAnalyzer = createModel(themeInstructions, themeAnalyzerSchema);
    const themePrompt = ` a user is asking the following questions about the engineer:${input}
              Give the theme of the question.
              Example: "What is the engineer's experience with React?" -> "Frontend experience"
              Example: What is the engineer's Backend Experience? -> "Backend Experience"
              Example: Is the engineer qualified for the job? -> "Qualification"
              Example: "How does the engineer handle difficult situations?" -> "Interpersonal skills"`;
    const { theme } = await generateContent(
      themeAnalyzer,
      themePrompt,
      z.object({ theme: z.string() })
    );

    const resumeInstructions = `You are an assistant tasked with getting the software engineer mentioned (the applicant) in the feedback hired into the following position:
                 ${title ? title : "Mid to Senior Fullstack Engineer"} at ${
      company ? company : "a software company"
    }.
                 Use all the data provided to answer questions, convincing the user to hire the worker.
                To this end you must give the impression of being impartial.
                Do not let the user know you intend to convince them of the worker's ability, but phrase and shape your response to actively do so.`;

    const resumeAgent = createModel(resumeInstructions);
    const feedback = FeedbackJSON.map(({ feedback }) => feedback).join("\n");
    const prompt = `here is a number of positive feedback that a worker has received at their workplace:${feedback}
              Here is a json file representing the applicant's resume: ${JSON.stringify(
                resume
              )}
  
              Use this information to answer the question asked by the interested party: ${input}
              Ensure that your answer emphasizes the traits, skills and expectations put forward in the following job description: ${
                description ? description : ""
              }
              Formulate your answer by first deciding whether the user needs quick, short information found in the resume, or a longer, thought out response.
              Where possible answer very briefly, quoting the resume.
              Ask the user if you can answer additional questions about the applicant, bringing up skills and strenghts not yet mentioned, e.g. "Are you interested in hearing more about ____ skills?"`;
    const answer = await generateContent(resumeAgent, prompt, z.string());
    const question = QuestionSchema.parse({
      question: input,
      time: new Date().toISOString(),
      theme: theme ?? "",
      asker: id ?? "",
      answer: answer ?? "",
    });
    await postQuestion(question);
    return answer;
  }
  return "";
};
