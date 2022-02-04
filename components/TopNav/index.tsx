import { Logo } from "@/components/Logo";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";

import { MENU_ITEMS } from "@/data/menu";

export const TopNav = () => {
  return (
    <NavBar>
      <Logo />
      <ul className="flex flex-row self-end h-12">
        {MENU_ITEMS.map((menu) => (
          <NavItem link={menu.link} title={menu.title} key={menu.title} />
        ))}
      </ul>
    </NavBar>
  );
};
