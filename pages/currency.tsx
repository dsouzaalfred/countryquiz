import type { NextPage } from "next";

import { PageLayout } from "@/layouts/Page";
import { PageTitle } from "@/components/PageTitle";
import { PageLink } from "@/components/PageLink";

const Currency: NextPage = () => {
  return (
    <PageLayout>
      <PageTitle title="Currency quiz" />
      <div className="flex w-full flex-col md:flex-row justify-center">
        <PageLink link="/currency-to-country" title="Guess the country" />
        <PageLink link="/country-to-currency" title="Guess the currency" />
      </div>
    </PageLayout>
  );
};

export default Currency;
