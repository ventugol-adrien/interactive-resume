import { useState } from "react";
import AnimatedText from "./AnimatedText";

interface ChatCardProps {
  title: string;
  placeholder?: string;
  id?: string;
  context?: string[];
  clickHandler: (
    input: string,
    id?: string,
    context?: string[]
  ) => Promise<string>;
}

export const ChatCard: React.FC<ChatCardProps> = (props) => {
  const [title, clickHandler, placeholder, id] = [
    props.title,
    props.clickHandler,
    props.placeholder,
    props.id,
  ];
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const ask = async () => {
    if (input) {
      console.log("Asking...");
      setResponse("Generating response...");
      const llminput = input;
      setInput("");
      const llm_response = await clickHandler(llminput, id);
      setResponse(llm_response);
    } else {
      setResponse("Please ask a question.");
    }
  };

  return (
    <div className="card">
      <h2 className="cardTitle">{title}</h2>
      {response ? (
        <AnimatedText text={response} />
      ) : (
        <p className="placeholder"> {placeholder}</p>
      )}
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          height: "25px",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <input
          style={{
            width: "80%",
            height: "100%",
            borderRadius: "4em",
            padding: "5px",
          }}
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Ask a question"
        />
        <button onClick={ask}>Ask</button>
      </span>
    </div>
  );
};
