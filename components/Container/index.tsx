import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx("container mx-auto px-2 md:px-4", className)}>
      {children}
    </div>
  );
};
