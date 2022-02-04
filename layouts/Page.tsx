import { ReactNode } from "react";

import { Container } from "@/components/Container";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="bg-gray-100 h-screen">
      <TopNav />
      <Container className="pt-8 md:mt-8 md:p-0">{children}</Container>
      <BottomNav />
    </div>
  );
};
