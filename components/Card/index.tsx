import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => {
  return (
    <div className="py-4 px-4 max-w-md mx-auto rounded-xl shadow-md space-y-2 flex items-center sm:space-y-0 bg-card">
      {children}
    </div>
  );
};
