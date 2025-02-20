import logo from './assets/logo.png'
import './App.css'
import { getJob } from './services/getJob'
import { Resume } from './components/Resume'
import { Job } from './types'
import { memo, useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

const App:React.FC = () => {
  const [job, setJob] = useState<Job | null>(null)
  
  const JobFetcher: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const setFavicon = useCallback((faviconUrl: string | undefined) => {
      const link: HTMLLinkElement | null = document.querySelector('link[rel="icon"][type="image/svg+xml"][href="/vite.svg"]');
      link && faviconUrl ? link.href = faviconUrl : null},[])
    
    useEffect(() => {
      const fetchJob = async (id: string) => {
        if (!job) {
          const fetchedJob: Job = await getJob(id)
          setJob(fetchedJob)
        } else {
          document.title = `Adrien X ${job.company}`
          setFavicon(job.favicon); 
        }

      }

      id ? fetchJob(id) : null
    },[id, job, setFavicon])

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
