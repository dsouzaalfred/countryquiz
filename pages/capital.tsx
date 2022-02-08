import type { NextPage } from "next";

import { PageLayout } from "@/layouts/Page";
import { PageLink } from "@/components/PageLink";
import { PageTitle } from "@/components/PageTitle";

const Capital: NextPage = () => {
  return (
    <PageLayout>
      <PageTitle title="Capital quiz" />
      <div className="flex w-full flex-col md:flex-row justify-center">
        <PageLink link="/capital-to-country" title="Guess the country" />
        <PageLink link="/country-to-capital" title="Guess the capital" />
      </div>
    </PageLayout>
  );
};

export default Capital;
