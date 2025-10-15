import axios from "axios";
import { Job, ResumeDocument } from "../types";
import { getResume } from "./resumes";

export const getJob = async (jobId: string): Promise<Job> => {
  const { data } = await axios.get<Job>(
    `https://resume.adriens-apis.io/pdf/jobs/${jobId}/`
  );
  return data;
};

export const getJobs = async (
  parms: Record<string, string>
): Promise<Job[]> => {
  const { data } = await axios.get<Job[]>(
    `https://resume.adriens-apis.io/pdf/jobs/`,
    { params: parms }
  );
  return data;
};

export const getLinkedResume = async (
  jobId?: string
): Promise<ResumeDocument | undefined> => {
  if (jobId) {
    const jobData = await getJob(jobId);
    return jobData.resume ? await getResume(jobData.resume) : undefined;
  }
};
