import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const NavBar = ({ children }: Props) => {
  return (
    <nav className="flex md:hidden flex-row items-center justify-around px-8 h-16 bg-white visible md:invisible fixed bottom-0 w-full text-2xl">
      {children}
    </nav>
  );
};
