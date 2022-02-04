import clsx from "clsx";
import Link from "next/link";

interface NavItemProp {
  isActive?: boolean;
  title: string;
  link: string;
}

export const NavItem = ({ isActive, title, link }: NavItemProp) => {
  return (
    <Link href={link} passHref>
      <a
        className={clsx(
          "w-16 text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-center justify-center h-full",
          {
            "bg-gradient-to-t from-white to-gray-100 border-t-4 border-gray-700 text-gray-700":
              isActive,
          }
        )}
      >
        {title}
      </a>
    </Link>
  );
};
