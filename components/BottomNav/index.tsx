import { Logo } from "@/components/Logo";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";

import { MENU_ITEMS } from "@/data/menu";

export const BottomNav = () => {
  return (
    <NavBar>
      <Logo />
      {MENU_ITEMS.map((menu) => (
        <NavItem link={menu.link} title={menu.title} key={menu.title} />
      ))}
    </NavBar>
  );
};
