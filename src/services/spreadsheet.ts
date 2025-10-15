import axios from "axios";
import { sheets_v4 } from "googleapis";
import { Question } from "../types";
const serverURL = import.meta.env.VITE_SERVER_URL;

export const putQuestion = async (
  question: Question
): Promise<sheets_v4.Schema$AppendValuesResponse> => {
  const { data } = await axios.post<sheets_v4.Schema$AppendValuesResponse>(
    `${serverURL}/spreadsheet/question/`,
    { ...question }
  );
  console.log(data);
  return data;
};
