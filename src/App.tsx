import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleGenerativeAI, SchemaType  } from '@google/generative-ai'
import { Feedback } from './assets/Feedback'
import { Feedbacks } from './types'

function App() {
  const [count, setCount] = useState(0)
  const [feedback, setFeedback] = useState<Feedbacks[]>()
  const desiredData = "feedback_date, employee_name, feedback"

  const feedbackSchema =  {
    description: "List of Feedbacks",
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        feedback_date: {
          type: SchemaType.STRING,
          description: "Date at which the feeback was given",
          nullable: false,
        },
        employee_name: {
          type: SchemaType.STRING,
          description: "Name of the employee giving the feedback",
          nullable: false,
        },
        feedback: {
          type: SchemaType.STRING,
          description: "Feedback that the employee shared about their co-worker",
          nullable: false,
        }

      },
      required: ["employee_name", "feedback_date", "feedback"],
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      if (import.meta.env.VITE_GEMINI_API_KEY) {

        const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
        const csv = Feedback.csv
        console.log(csv)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig:{
          responseMimeType: "application/json",
          responseSchema: feedbackSchema
        } });

        const prompt = `here is a CSV file containing feedback from multiple employees: ${csv}.
        
        Extract the following pieces of data from each line: ${desiredData}. Make sure the employee feedback text is formatted cleanly and does not contain any out of place characters.`
        const result = await model.generateContent(prompt);
        setFeedback(JSON.parse(result.response.text())) 

    }
  }
  void fetchData()
  })
  console.log(feedback)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {feedback?.map( f => 
          <p>{`${f.employee_name} on ${f.feedback_date}:`}</p> 
        )}
         
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
