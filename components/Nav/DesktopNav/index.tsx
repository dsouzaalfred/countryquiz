import { NavBody } from "@/components/Nav/NavBody";
import { Alfred } from "@/components/Alfred";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex flex-col w-64 justify-between bg-light min-h-screen">
      <div>
        <NavBody />
      </div>
      <div className="p-4">
        <Alfred />
      </div>
    </nav>
  );
};
