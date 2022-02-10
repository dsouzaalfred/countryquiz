import { Logo } from "@/components/Logo";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";

import { MENU_ITEMS } from "@/data/menu";

export const TopNav = () => {
  return (
    <NavBar>
      <div className="flex flex-row bg-light border-b-2 border-white">
        <Logo />
      </div>
      <ul className="flex flex-col px-4 pb-4">
        {MENU_ITEMS.map((menu) => (
          <NavItem link={menu.link} title={menu.title} key={menu.title} />
        ))}
      </ul>
    </NavBar>
  );
};
