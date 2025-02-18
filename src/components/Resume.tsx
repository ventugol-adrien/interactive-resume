import { askCoworkers } from "../services/askCoworkers"
import { Job } from "../types"
import { ChatCard } from "./ChatCard"

interface ResumeProps {
    job?: Job
    id?: string
}

export const Resume: React.FC<ResumeProps> = ({ job, id }) => {
    return (
        <div>
            { job ? (
                <div className="single-line">
                    <p>Ask directly how Adrien Ventugol's experience and skills match with the</p>
                    <a className="jobTitle" href={job.link}>{` ${job.title} `}</a>
                    <p>position. Get insight into what he would bring to </p>
                    <p className="company">{job.company}</p>
                    <p>, according to former colleagues' feedback.</p>
                </div>
            ) : (
                <p>Ask directly about Adrien Ventugol's experience and skills. Get insight into what working with him is like, according to former colleagues' feedback.</p>
            )}
            <p className='disclaimer'>By using this application, you agree to your question potentially being recorded for self-improvement purposes.</p>
            <div className="cardBox">
                <ChatCard title={"Ask about Adrien"} clickHandler={askCoworkers} id={id} context={job ? [job.title,job.company,job.description] : undefined} placeholder="Get an answer to your question based on feedback from Adrien's former team."/>
            </div>
        </div>
    )
}