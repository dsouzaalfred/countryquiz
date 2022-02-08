interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="py-4 px-4 max-w-md mx-auto space-y-2 flex items-center justify-center sm:space-y-0">
      <p className="font-bold text-sky-600">{title}</p>
    </div>
  );
};
