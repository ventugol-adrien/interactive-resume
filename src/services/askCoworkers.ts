import { Job, QuestionSchema } from "../types";
import { postQuestion as postQuestion } from "./questions";

export const askCoworkers = async (input: string, job?: Job) => {
  const { id } = job || {};
  if (input) {
    const question = QuestionSchema.parse({
      question: input,
      time: new Date().toISOString(),
      asker: id ?? "",
    });
    const answer = await postQuestion(question);
    return answer;
  }
};
