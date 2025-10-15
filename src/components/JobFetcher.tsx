import { useCallback, useEffect, memo, useState } from "react";
import { useParams } from "react-router-dom";
import { getJob } from "../services/jobs";
import { Job } from "../types";
import { Resume } from "./Resume";

const BaseJobFetcher: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job>();

  const setFavicon = useCallback((faviconUrl: string | undefined) => {
    const link: HTMLLinkElement | null = document.querySelector(
      'link[rel="icon"][type="image/svg+xml"][href="/vite.svg"]'
    );
    if (link && faviconUrl) {
      link.href = faviconUrl;
    }
  }, []);

  useEffect(() => {
    const fetchJob = async (id: string) => {
      const fetchedJob = await getJob(id);
      setJob(fetchedJob);
      const { company, favicon } = fetchedJob;
      document.title = `Adrien X ${company}`;
      setFavicon(favicon);
    };

    if (id) {
      fetchJob(id);
    }
  }, [id, setFavicon]);

  return <Resume job={job} />;
};

export const JobFetcher = memo(BaseJobFetcher);
