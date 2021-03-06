import Link from "next/link";

interface PageLinkProps {
  link: string;
  title: string;
}

export const PageLink = ({ link, title }: PageLinkProps) => {
  return (
    <div className="py-2 md:py-4 px-2 md:px-4 rounded-xl space-y-2 sm:space-y-0 border border-secondary my-1 md:mx-1 w-full h-28 flex flex-row items-center justify-center shadow-md">
      <Link href={link}>
        <a className="font-bold text-primary text-2xl text-center">{title}</a>
      </Link>
      <br />
    </div>
  );
};
