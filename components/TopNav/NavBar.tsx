import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const NavBar = ({ children }: Props) => {
  return (
    <nav className="flex flex-row items-center justify-between px-8 h-16 bg-white">
      {children}
    </nav>
  );
};
