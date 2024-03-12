"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({
  type,
  text,
  onClick,
  actionButton,
}: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton &&
            `bg-green-600 rounded-full p-2 text-white`,
          `bg-green-600 px-2 text-white`
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
