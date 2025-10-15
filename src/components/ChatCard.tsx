import { useState } from "react";
import AnimatedText from "./AnimatedText";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Job } from "../types";
import { askCoworkers } from "../services/askCoworkers";

interface ChatCardProps {
  title: string;
  placeholder?: string;
  job?: Job;
}

export const ChatCard: React.FC<ChatCardProps> = (props) => {
  const { title, placeholder, job } = props;
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
      const llm_response = await askCoworkers(llminput, job);
      setResponse(llm_response);
    } else {
      setResponse("Please ask a question.");
    }
  };

  return (
    <Card
      sx={{
        padding: "1.5em 2em 2em 2em",
        borderRadius: "3.5em",
        border: " #000 solid 1px",
        width: "500px",
        boxShadow: " #000 2px 2px 8px",
        background: "#ffffff",
      }}
    >
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">
          {response ? (
            <AnimatedText text={response} />
          ) : (
            <p className="placeholder"> {placeholder}</p>
          )}
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          <TextField
            sx={{
              flex: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
            value={input}
            onChange={handleInput}
            placeholder="Ask a question"
            size="small"
          />
          <Button
            onClick={ask}
            variant="contained"
            sx={{
              minWidth: "80px",
              borderRadius: "8px",
            }}
          >
            Ask
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};
