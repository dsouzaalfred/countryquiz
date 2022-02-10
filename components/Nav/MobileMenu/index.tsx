import { useState } from "react";
import { Logo } from "@/components/Logo";
import { NavBody } from "@/components/Nav/NavBody";

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
        <div
          className="absolute z-10 min-w-full min-h-screen top-0 left-0 bg-black/[0.5]"
          onClick={handleClick}
        >
          <nav className="flex flex-col w-64 bg-light min-h-screen">
            <NavBody />
          </nav>
        </div>
      )}
    </>
  );
};
