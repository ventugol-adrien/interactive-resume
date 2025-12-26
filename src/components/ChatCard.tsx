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
import { Job } from "../types";
import { askQuestion } from "../services/askCoworkers";
import { MobileContext } from "../contexts/MobileProvider";
import { DisplayCard } from "./generic/DisplayCard";
import { useAxios } from "../hooks/useAxios";

interface ChatCardProps {
  title: string;
  placeholder?: string;
  job?: Job;
}

export const ChatCard: React.FC<ChatCardProps> = (props) => {
  const { title, placeholder, job } = props;
  const { isMobile } = useContext(MobileContext);
  const [input, setInput] = useState<string>("");
  const [generating, error, response, ask] = useAxios(askQuestion, [
    input,
    job,
  ]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleTextAnimation = () => {
    // if generating and no response -> Generating response Animated text
    // if not generating and no response -> placeholder
    // if response -> Response
    if (error) {
      return (
        <AnimatedText
          text={"Sorry, I couldn't answer that, please try again later."}
        />
      );
    }
    if (generating && !response) {
      return <AnimatedText text={"Generating answer..."} />;
    } else if (!generating && !response) {
      return <p className="placeholder"> {placeholder}</p>;
    } else if (response) {
      return <AnimatedText text={response.answer} />;
    }
    return <p className="placeholder"> {placeholder}</p>;
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
          <Typography variant="body1">{handleTextAnimation()}</Typography>
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
          opacity: generating || response ? 1 : 0,
          transform:
            generating || response ? "translateY(0)" : "translateY(30px)",
          transition: "all ease-in-out 0.5s",

          justifyContent: "space-evenly",
        }}
      >
        {response?.highlightCards
          ? response?.highlightCards.map(({ title, content }, index) => (
              <DisplayCard
                key={index}
                title={title}
                content={content}
                sx={{
                  width:
                    Math.floor(
                      100 / ((response?.highlightCards?.length || 0) + 1)
                    ) + "%",
                  padding: "1em 1.5em 1.5em 1.5em",
                  borderRadius: "0.5em",
                  animation: "ease-in-out 3s",
                }}
              />
            ))
          : [
              { title: <Skeleton />, content: <Skeleton /> },
              { title: <Skeleton />, content: <Skeleton /> },
              { title: <Skeleton />, content: <Skeleton /> },
            ].map(({ title, content }, index) => {
              if (generating) {
                return (
                  <DisplayCard
                    key={index}
                    title={title}
                    content={content}
                    sx={{
                      width: Math.floor(100 / 4) + "%",
                      padding: "1em 1.5em 1.5em 1.5em",
                      borderRadius: "0.5em",
                      animation: "ease-in-out 3s",
                    }}
                  />
                );
              }
            })}
      </Box>
    </Box>
  );
};
