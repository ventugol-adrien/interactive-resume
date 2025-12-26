import {
  createContext,
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Job, Resume } from "../types";
import { useParams } from "react-router-dom";
import { getJob } from "../services/jobs";
import { getResume } from "../services/resumes";
import { useAxios } from "../hooks/useAxios";
import { CircularProgress } from "@mui/material";

export const JobContext = createContext<{
  job?: Job;
  resume?: Resume;
  updateContext?: (job: Job, resume: Resume) => void;
}>({
  job: undefined,
  resume: undefined,
  updateContext: undefined,
});

const BaseJobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job>();
  const [resume, setResume] = useState<Resume>();
  const [loading, _, jobData, call] = useAxios(getJob, [id as string]);
  const setFavicon = useCallback((faviconUrl: string | undefined) => {
    const link: HTMLLinkElement | null =
      document.querySelector('link[rel="icon"]');
    if (link && faviconUrl) {
      link.href = faviconUrl;
    }
  }, []);

  const handleContextUpdate = useCallback(
    (job?: Job, resume?: Resume) => {
      job ? setJob(job) : null;
      resume ? setResume(resume) : null;
    },
    [setJob, setResume]
  );

  useEffect(() => {
    if (id) {
      console.log("Fetching job...");
      call();
    }
  }, [id]);

  useEffect(() => {
    const processJobData = async () => {
      if (jobData) {
        console.log("Job data received:", jobData);
        setJob(jobData);

        if (jobData.resume) {
          const fetchedResume = await getResume(jobData.resume);
          setResume(fetchedResume);
          const { company, favicon } = jobData;
          document.title = `Adrien X ${company}`;
          setFavicon(favicon);
        }
      }
    };

    processJobData();
  }, [jobData, setFavicon]);

  return (
    <JobContext.Provider
      value={{ job: job, resume: resume, updateContext: handleContextUpdate }}
    >
      {" "}
      {loading ? (
        <>
          <CircularProgress /> Loading position data...
        </>
      ) : (
        ""
      )}{" "}
      {children}
    </JobContext.Provider>
  );
};
export const JobProvider = memo(BaseJobProvider);
