import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => {
  return (
    <div className="py-2 md:py-4 px-2 md:px-4 max-w-md mx-auto rounded-xl shadow-md space-y-2 flex items-center sm:space-y-0 bg-light/[.2]">
      {children}
    </div>
  );
};
