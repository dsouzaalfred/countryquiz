import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Box = ({ children }: Props) => {
  return <div className="box-content h-32 w-32 p-4 border-4">{children}</div>;
};
