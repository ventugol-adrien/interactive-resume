import axios from "axios";
import { Answer, Question } from "../types";

export const postQuestion = async (question: Question) => {
  const { data } = await axios.post<Answer>(
    `https://sheets.adriens-apis.io/spreadsheet/question/`,
    { ...question }
  );
  console.log(data);
  return data;
};
