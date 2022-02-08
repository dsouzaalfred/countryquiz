import type { NextPage } from "next";

import { PageLayout } from "@/layouts/Page";
import { PageLink } from "@/components/PageLink";

const Flag: NextPage = () => {
  return (
    <PageLayout>
      <div className="flex w-full flex-row justify-center">
        <PageLink link="/flag-to-country" title="Guess the country" />
        <PageLink link="/country-to-flag" title="Guess the flag" />
      </div>
    </PageLayout>
  );
};

export default Flag;
