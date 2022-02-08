import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className="text-xl text-gray-800 tracking-wide flex items-center justify-center h-full">
        Country Quiz
      </a>
    </Link>
  );
};
