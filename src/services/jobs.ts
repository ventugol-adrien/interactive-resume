import axios from "axios";
import { Job, ResumeDocument } from "../types";
import { getResume } from "./resumes";

let job: Job | null = null;
export const getJob = async (jobId: string): Promise<Job> => {
  if (!job || jobId !== job?.id) {
    const { data } = await axios.get<Job>(
      `https://resume.adriens-apis.io/pdf/jobs/${jobId}/`
    );
    job = data;
  }
  return job;
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

let resume: ResumeDocument | null = null;
export const getLinkedResume = async (
  jobId: string
): Promise<ResumeDocument | undefined> => {
  const jobData = await getJob(jobId);
  if (jobData.resume) {
    if (!resume) {
      resume = await getResume(jobData.resume);
      return resume;
    }
    return resume;
  }
};
