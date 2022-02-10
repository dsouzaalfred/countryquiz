import { ReactNode } from "react";

import { Container } from "@/components/Container";
import { TopNav } from "@/components/TopNav";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="bg-white h-screen">
      <TopNav />
      <Container className="pt-8 md:mt-8 md:p-0">{children}</Container>
    </div>
  );
};
