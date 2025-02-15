import { useState } from "react"
import AnimatedText from "./AnimatedText"

interface ChatCardProps {
    title: string
    placeholder?: string
    clickHandler: (input:string) => Promise<string>
}

export const ChatCard: React.FC<ChatCardProps> = (props) => {
    const [title, clickHandler, placeholder] = [props.title, props.clickHandler, props.placeholder]
    const [input, setInput] = useState<string>("")
    const [response, setResponse] = useState<string>("")

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    const ask = async () => {
        setResponse("Generating response...")
        setInput("")
        const llm_response = await clickHandler(input)
        setResponse(llm_response)

    }
        

    return (
        <div className="card">
            <h2 className="cardTitle">{title}</h2>
            {response ? <AnimatedText text={response} /> : <p className="placeholder"> {placeholder}</p>}
            <span style={{ display: "flex", flexDirection: "row",height: "25px", width: "100%", justifyContent: "space-between", alignItems: "center", padding: "10px", borderTop: "1px solid #e0e0e0" }}>
            <input style={{width: '80%', height:'100%', borderRadius: "4em", borderColor: "transparent"}} type="text" value={input} onChange={handleInput} /><button onClick={ask} >Ask</button>
            </span>
        </div>
    )
}