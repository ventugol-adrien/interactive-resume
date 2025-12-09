import { useContext, useState } from "react";
import AnimatedText from "./AnimatedText";
import {
  Box,
  Button,
  Card,
  CardContent,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { HighlightCard, Job } from "../types";
import { askCoworkers } from "../services/askCoworkers";
import { MobileContext } from "../contexts/MobileProvider";
import { DisplayCard } from "./generic/DisplayCard";

interface ChatCardProps {
  title: string;
  placeholder?: string;
  job?: Job;
}

export const ChatCard: React.FC<ChatCardProps> = (props) => {
  const { title, placeholder, job } = props;
  const { isMobile } = useContext(MobileContext);
  const [input, setInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [highlights, setHighlights] = useState<HighlightCard[]>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const ask = async () => {
    if (input) {
      console.log("Asking...");
      setResponse("Generating response...");
      setHighlights(undefined);
      const llminput = input;
      setInput("");

      const result = await askCoworkers(llminput, job);
      if (result) {
        const { answer, highlightCards } = result;
        setResponse(answer);
        setHighlights(highlightCards);
      } else {
        setResponse("Sorry, I couldn't get an answer.");
      }
    } else {
      setResponse("Please ask a question.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Card
        sx={{
          padding: "1.5em 2em 2em 2em",
          borderRadius: "3.5em",
          border: " #000 solid 1px",
          width: isMobile ? "90vw" : "500px",
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
              width: isMobile ? "90vw" : "100%",
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
                minWidth: isMobile ? "80vw" : "80px",
                borderRadius: "8px",
              }}
            >
              Ask
            </Button>
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          width: isMobile ? "90vw" : "1200px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-evenly",
        }}
      >
        {highlights
          ? highlights.map(({ title, content }, index) => (
              <DisplayCard
                key={index}
                title={title}
                content={content}
                sx={{
                  width: Math.floor(100 / (highlights.length + 1)) + "%",
                  padding: "1em 1.5em 1.5em 1.5em",
                  borderRadius: "0.5em",
                }}
              />
            ))
          : [
              { title: <Skeleton />, content: <Skeleton /> },
              { title: <Skeleton />, content: <Skeleton /> },
              { title: <Skeleton />, content: <Skeleton /> },
            ].map(({ title, content }, index) => (
              <DisplayCard
                key={index}
                title={title}
                content={content}
                sx={{
                  width: Math.floor(100 / 4) + "%",
                  padding: "1em 1.5em 1.5em 1.5em",
                  borderRadius: "0.5em",
                }}
              />
            ))}
      </Box>
    </Box>
  );
};
