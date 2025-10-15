import axios from "axios";
import { ResumeDocument } from "../types";

export const getResume = async (resumeId: string): Promise<ResumeDocument> => {
  const { data } = await axios.get<ResumeDocument>(
    `https://resume.adriens-apis.io/pdf/resumes/${resumeId}/`
  );
  return data;
};
