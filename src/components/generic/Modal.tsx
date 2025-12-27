import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
} from "@mui/material";
import { memo } from "react";

interface BaseModalProps extends DialogProps {
  actions: ButtonProps[];
}
const BaseModal: React.FC<BaseModalProps> = ({
  children,
  actions,
  ...dialogProps
}) => {
  return (
    <>
      <Dialog {...dialogProps}>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {actions.map(({ children, ...props }, index) => (
            <Button key={index} {...props}>
              {children}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Modal = memo(BaseModal);
