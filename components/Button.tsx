import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  style: string;
  onClick(): void;
};

export const Button: FC<ButtonProps> = ({ children, style, onClick }) =>
  <button
    className={`rounded-md p-2 shadow gap-2 hover:shadow-lg ${style}`}
    onClick={onClick}
  >
    {children}
  </button>;
