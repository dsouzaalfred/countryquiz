import { NavBody } from "@/components/Nav/NavBody";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex flex-col w-64 bg-light min-h-screen">
      <NavBody />
    </nav>
  );
};
