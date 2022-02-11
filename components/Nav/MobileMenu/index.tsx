import { useState } from "react";

import { Logo } from "@/components/Logo";
import { NavBody } from "@/components/Nav/NavBody";
import { Alfred } from "@/components/Alfred";

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleClick = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="absolute min-w-full bottom-0 flex align-middle justify-between md:hidden">
        <div className="flex flex-row bg-light">
          <Logo />
        </div>
        <div className="flex flex-row bg-light p-2">
          <Alfred />
        </div>
        <div className="flex flex-row bg-light z-20">
          <button
            className="text-sm md:text-xl text-primary tracking-wide flex items-center justify-center h-full p-2"
            onClick={handleClick}
          >
            {!showMenu && "Show Menu"}
            {showMenu && "Hide Menu"}
          </button>
        </div>
      </div>
      {showMenu && (
        <nav className="absolute z-10 right-0 bottom-0 flex flex-col justify-end w-64 bg-light md:hidden">
          <NavBody />
        </nav>
      )}
    </>
  );
};
