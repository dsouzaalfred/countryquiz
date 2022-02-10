import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className="text-xl text-primary tracking-wide flex items-center justify-center h-full p-4">
        Country Quiz
      </a>
    </Link>
  );
};
