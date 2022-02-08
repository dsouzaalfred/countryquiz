import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <span className="text-xl text-gray-800">Country Quiz</span>
      </a>
    </Link>
  );
};
