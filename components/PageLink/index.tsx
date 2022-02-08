import Link from "next/link";

interface PageLinkProps {
  link: string;
  title: string;
}

export const PageLink = ({ link, title }: PageLinkProps) => {
  return (
    <div className="py-4 px-4 rounded-xl space-y-2 sm:space-y-0 border border-slate-400 m-1 w-1/4 flex flex-row justify-center">
      <Link href={link}>
        <a className="font-bold text-blue-600 text-2xl ">{title}</a>
      </Link>
      <br />
    </div>
  );
};
