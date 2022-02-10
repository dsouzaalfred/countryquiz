import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProp {
  title: string;
  link: string;
}

export const NavItem = ({ title, link }: NavItemProp) => {
  const { asPath } = useRouter();
  return (
    <li>
      <Link href={link} passHref>
        <a
          className={clsx(
            "w-24 text-black hover:text-white cursor-pointer font-medium tracking-wide flex items-center text-lg h-12",
            {
              "text-secondary": asPath === link,
            }
          )}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
