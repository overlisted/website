import {ReactNode} from "react";

type ButtonProps = {
  children: ReactNode,
  style: string
  onClick(): void
};

export const Button = ({ children, style, onClick }: ButtonProps) =>
  <button
    className={`rounded-md p-2 shadow gap-2 hover:shadow-lg ${style}`}
    onClick={onClick}
  >
    {children}
  </button>;
