import axios from "axios";
import { Answer, Question } from "../types";
const serverURL = import.meta.env.VITE_SERVER_URL;

export const postQuestion = async (question: Question) => {
  const { data } = await axios.post<Answer>(
    `${serverURL}/spreadsheet/question/`,
    { ...question }
  );
  console.log(data);
  return data;
};
