import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
        <span className="text-2xl text-gray-800">CQ</span>
      </a>
    </Link>
  );
};
