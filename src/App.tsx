import logo from './assets/logo.png'
import './App.css'
import { getJob } from './services/getJob'
import { Resume } from './components/Resume'
import { Job } from './types'
import { memo, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

const App:React.FC = () => {
  const [job, setJob] = useState<Job | null>(null)
  
  const JobFetcher: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    useEffect(() => {
      const fetchJob = async (id: string) => {
        if (!job) {
          console.log("Here is the id:", id)
          const fetchedJob: Job = await getJob(id)
          setJob(fetchedJob)
        }

      }

      id ? fetchJob(id) : null
    },[job])

    return <Resume job={job || undefined} id={id} />
  }

  const MemoizedJobFetcher = memo(JobFetcher)
  

  return (
    <>
      <div>
        <img className='logo' src={logo} alt=" Interactive Resume Logo" />
      </div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/:id" element={<MemoizedJobFetcher/>}/>
          <Route path="/" element={<MemoizedJobFetcher/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
