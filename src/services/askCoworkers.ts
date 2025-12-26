import { Job, QuestionSchema } from "../types";
import { postQuestion as postQuestion } from "./questions";

export const askQuestion = async (input: string, job?: Job) => {
  const { id } = job || {};
  try {
    if (input) {
      const question = QuestionSchema.parse({
        question: input,
        time: new Date().toISOString(),
        asker: id ?? "",
      });
      const answer = await postQuestion(question);
      return answer;
    }
  } catch (err) {
    console.error("Error sending question to endpoint: " + JSON.stringify(err));
    throw new Error(
      "Error sending question to endpoint: " + JSON.stringify(err)
    );
  }
};
