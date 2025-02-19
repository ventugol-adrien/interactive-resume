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
            { job ? <p> {`Ask directly how Adrien Ventugol's experience and skills match with the ${job.title} position. Get insight into what he would bring to ${job.company}, according to former colleagues' feedback.`}</p>
            : <p>Ask directly about Adrien Ventugol's experience and skills. Get insight into what working with him is like, according to former colleagues' feedback.</p>}
            <p className='disclaimer'>By using this application, you agree to your question potentially being recorded for self-improvement purposes.</p>
            <div>
                <ChatCard title={"Ask Adrien's coworkers"} clickHandler={askCoworkers} id={id} context={job ? [job.title,job.company,job.description] : undefined} placeholder="Get an answer to your question based on feedback from Adrien's former team."/>
            </div>
        </div>
    )
}