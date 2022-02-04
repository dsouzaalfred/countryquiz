import clsx from "clsx";
import Link from "next/link";

interface NavItemProp {
  isActive?: boolean;
  title: string;
  link: string;
}

export const NavItem = ({ isActive = false, title, link }: NavItemProp) => {
  return (
    <li>
      <Link href={link} passHref>
        <a
          className={clsx(
            "w-24 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-center justify-center h-full",
            {
              "text-gray-700 border-b-4 border-gray-700 bg-gradient-to-b from-white to-gray-100":
                isActive,
            }
          )}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
