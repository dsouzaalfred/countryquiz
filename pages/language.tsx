import type { NextPage } from "next";

import { PageLayout } from "@/layouts/Page";
import { PageTitle } from "@/components/PageTitle";
import { PageLink } from "@/components/PageLink";

const Language: NextPage = () => {
  return (
    <PageLayout>
      <PageTitle title="Language quiz" />
      <div className="flex w-full flex-col md:flex-row justify-center">
        <PageLink link="/language-to-country" title="Guess the country" />
        <PageLink link="/country-to-language" title="Guess the language" />
      </div>
    </PageLayout>
  );
};

export default Language;
