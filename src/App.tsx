import logo from './assets/logo.png'
import './App.css'
import { ChatCard } from './components/ChatCard'
import { askCoworkers } from './services/askCoworkers'

function App() {
  

  return (
    <>
      <div>
        <img className='logo' src={logo} alt=" Interactive Resume Logo" />
      </div>
      <h1>Interactive Resume</h1>
      <p> In this app you can ask directly about Adrien Ventugol's experience and skills, as well as get insight into what working with him is like based on feedback from former colleagues.</p>
      <p className='disclaimer'>By using this application, you agree to your question potentially being recorded for self-improvement purposes.</p>
      <div>
        <ChatCard title="Ask Adrien's coworkers" clickHandler={askCoworkers} placeholder="Get an answer to your question based on feedback from Adrien's former team."/>
      </div>
    </>
  )
}

export default App
