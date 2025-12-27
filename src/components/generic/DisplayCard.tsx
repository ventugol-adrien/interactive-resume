import { Card, CardContent, CardProps, Typography } from "@mui/material";
import { memo, ReactNode } from "react";

interface DisplayCardProps extends Omit<CardProps, "title" | "content"> {
  title: string | ReactNode;
  content: string | ReactNode;
}
const BaseDisplayCard: React.FC<DisplayCardProps> = ({
  title,
  content,
  children,
  ...cardProps
}) => {
  return (
    <>
      <Card {...cardProps}>
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "8px",
          }}
        >
          {title ? <Typography variant="h6">{title}</Typography> : ""}
          {content ? <Typography>{content}</Typography> : ""}
          {children}
        </CardContent>
      </Card>
    </>
  );
};
export const DisplayCard = memo(BaseDisplayCard);
