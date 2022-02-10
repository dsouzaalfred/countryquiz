interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="text-3xl mb-4 mt-4 text-center text-primary">{title}</h1>
  );
};
