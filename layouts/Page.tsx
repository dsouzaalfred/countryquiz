import { ReactNode } from "react";

import { Container } from "@/components/Container";
import { TopNav } from "@/components/TopNav";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative flex bg-grey-100 min-h-screen">
      <TopNav />
      <Container className="pt-8 md:p-0 min-h-screen">{children}</Container>
    </div>
  );
};
