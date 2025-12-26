import { useContext } from "react";
import { Job } from "../types";
import { ChatCard } from "./ChatCard";
import { JobContext } from "../contexts/JobProvider";
import { Box } from "@mui/material";

interface ResumeProps {
  job?: Job;
}

export const Resume: React.FC<ResumeProps> = () => {
  const { job } = useContext(JobContext);
  const { title, company, link } = job || {};
  return (
    <Box>
      {job ? (
        <div className="single-line">
          <p>
            Ask directly how Adrien Ventugol's experience and skills match with
            the
          </p>
          <a className="jobTitle" href={link}>{` ${title} `}</a>
          <p>position. Get insight into what he would bring to </p>
          <p className="company">{company}</p>
          <p>, according to former colleagues' feedback.</p>
        </div>
      ) : (
        <p>
          Ask directly about Adrien Ventugol's experience and skills. Get
          insight into what working with him is like, according to former
          colleagues' feedback.
        </p>
      )}
      <p className="disclaimer">
        By using this application, you agree to your question potentially being
        recorded for self-improvement purposes.
      </p>
      <div className="cardBox">
        <ChatCard
          title={"Ask about Adrien"}
          job={job}
          placeholder="Get an answer to your question based on feedback from Adrien's former team."
        />
      </div>
    </Box>
  );
};
