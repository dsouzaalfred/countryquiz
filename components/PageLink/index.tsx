import Link from "next/link";

interface PageLinkProps {
  link: string;
  title: string;
}

export const PageLink = ({ link, title }: PageLinkProps) => {
  return (
    <div className="py-4 px-4 rounded-xl space-y-2 sm:space-y-0 border border-slate-400 my-1 md:mx-1 w-full md:w-1/4 h-28 flex flex-row items-center justify-center shadow-md">
      <Link href={link}>
        <a className="font-bold text-blue-600 text-2xl text-center">{title}</a>
      </Link>
      <br />
    </div>
  );
};
