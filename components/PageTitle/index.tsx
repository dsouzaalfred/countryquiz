interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return <h1 className="text-3xl mb-4 text-center">{title}</h1>;
};
