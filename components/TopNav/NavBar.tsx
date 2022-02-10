import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const NavBar = ({ children }: Props) => {
  return (
    <nav className="flex flex-col w-64 bg-light min-h-screen">{children}</nav>
  );
};
