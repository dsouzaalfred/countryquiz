import { Logo } from "@/components/Logo";

import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";

import { MENU_ITEMS } from "@/data/menu";

export const TopNav = () => {
  return (
    <NavBar>
      <div className="flex h-12 flex-row">
        <Logo />
      </div>
      <ul className="flex flex-row h-12">
        {MENU_ITEMS.map((menu) => (
          <NavItem link={menu.link} title={menu.title} key={menu.title} />
        ))}
      </ul>
    </NavBar>
  );
};
