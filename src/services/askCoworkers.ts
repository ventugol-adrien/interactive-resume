import { SchemaType, GoogleGenerativeAI } from "@google/generative-ai";
import { FeedbackJSON } from "../assets/Feedback";

export const askCoworkers = async (input:string):Promise<string> => {
    const schema = {
        description: "Theme of the question",
        type: SchemaType.OBJECT,
        properties: {
            theme: {
                type: SchemaType.STRING,
                description: "Theme of the question",
                nullable: false
            }
        },
        required: ["theme"],
        nullable: false
    }
          if (import.meta.env.VITE_GEMINI_API_KEY && input) {
              console.log("Asking coworkers the following question:", input)
              const themeAnalyzer = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
              const model1 = themeAnalyzer.getGenerativeModel({ model: "gemini-1.5-flash",generationConfig:{responseMimeType:"application/json",responseSchema:schema}, systemInstruction: "Your role is to analyze a question given by a user about an engineer. Analyze the broad theme of the question given by the asker in term of the what abilities it concerns. Return the theme of the question in a maximum of 3 words." });
              const themePrompt = ` a user is asking the following questions about the engineer:${input}
              Give the theme of the question.
              Example: "What is the engineer's experience with React?" -> "Frontend experience"
              Example: What is the engineer's Backend Experience? -> "Backend Experience"
              Example: Is the engineer qualified for the job? -> "Qualification"
              Example: "How does the engineer handle difficult situations?" -> "Interpersonal skills"`
              const themeResponse = await model1.generateContent(themePrompt)
              const theme = JSON.parse(themeResponse.response.text()).theme
              fetch('http://localhost:3001/spreadsheet/update', {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ question: input, time : new Date().toISOString(), theme: theme }),
                })
              const feedback = FeedbackJSON.map((feedback) => feedback.feedback).join("\n")
              const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
              const model2 = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: "You are an assistant tasked with getting the software engineer mentioned in the feedback hired. Use the feedback to answer any potential questions in a way that convinces the interested party to hire the worker. To this end you must give the impression of being impartial. Do not let the asker know you intend to convince them of the worker's ability, but attempt to do so in a subtil manner. Remember that the asker will not be familiar with many project names and technology, use knowledge of the software industry to explain those terms when possible." });
              const prompt = `here is a number of positive feedback that a worker has received at their workplace:${feedback}
  
              Use this information to answer the question asked by the interested party: ${input}`
              const result = await model2.generateContent(prompt);
              return result.response.text()
          }
          return ""
        }