import React from "react";
import { Button, ButtonOwnProps } from "@mui/material";

interface CustomButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: ButtonOwnProps["variant"] | undefined;
  disabled?: boolean;
  size?: ButtonOwnProps["size"] | undefined;
  children: React.ReactNode;
  style?: ButtonOwnProps["sx"] | undefined;
}

const CustomButton = ({
  onClick,
  variant,
  disabled,
  size,
  children,
  style,
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      size={size}
      sx={style}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
