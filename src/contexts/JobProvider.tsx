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
    console.log("Job Context use effect running...");
    const fetchJob = async (id: string) => {
      console.log("Fetching job...");
      const fetchedJob = await getJob(id);
      setJob(fetchedJob);
      if (fetchedJob.resume) {
        const fetchedResume = await getResume(fetchedJob.resume);
        setResume(fetchedResume);
      }
      const { company, favicon } = fetchedJob;
      document.title = `Adrien X ${company}`;
      setFavicon(favicon);
    };

    if (id) {
      fetchJob(id);
    }
  }, [id, setFavicon]);

  return (
    <JobContext.Provider
      value={{ job: job, resume: resume, updateContext: handleContextUpdate }}
    >
      {children}
    </JobContext.Provider>
  );
};
export const JobProvider = memo(BaseJobProvider);
