import { Logo } from "@/components/Logo";
import { NavItem } from "@/components/Nav/NavItem";

import { MENU_ITEMS } from "@/data/menu";

export const NavBody = () => {
  return (
    <>
      <div className="hidden md:flex flex-row bg-light border-b-2 border-white">
        <Logo />
      </div>
      <ul className="flex flex-col px-4 pb-4">
        {MENU_ITEMS.map((menu) => (
          <NavItem link={menu.link} title={menu.title} key={menu.title} />
        ))}
      </ul>
    </>
  );
};
