import type { NextPage } from "next";
import Link from "next/link";

import { PageLayout } from "@/layouts/Page";
import { PageLink } from "@/components/PageLink";

const Capital: NextPage = () => {
  return (
    <PageLayout>
      <div className="flex w-full flex-row justify-center">
        <PageLink link="/capital-to-country" title="Guess the country" />
        <PageLink link="/country-to-capital" title="Guess the capital" />
      </div>
    </PageLayout>
  );
};

export default Capital;
