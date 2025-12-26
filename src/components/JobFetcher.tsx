import { memo } from "react";
import { Resume } from "./Resume";
import { JobProvider } from "../contexts/JobProvider";

const BaseJobFetcher: React.FC = () => {
  return (
    <JobProvider>
      <Resume />
    </JobProvider>
  );
};

export const JobFetcher = memo(BaseJobFetcher);
