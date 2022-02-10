import { ReactNode } from "react";

import { Container } from "@/components/Container";
import { DesktopNav } from "@/components/Nav/DesktopNav";
import { MobileMenu } from "@/components/Nav/MobileMenu";
interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-grey-100 min-h-screen">
      <DesktopNav />
      <MobileMenu />
      <Container className="pt-8 md:p-0 min-h-screen">{children}</Container>
    </div>
  );
};
