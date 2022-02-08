import type { NextPage } from "next";

import { PageLayout } from "@/layouts/Page";
import { PageLink } from "@/components/PageLink";
import { PageTitle } from "@/components/PageTitle";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <PageTitle title="Country quiz homepage" />
      <div className="flex w-full flex-col md:flex-row justify-center">
        <PageLink link="/flag" title="Flag quiz" />
        <PageLink link="/capital" title="Capital quiz" />
        <PageLink link="/language" title="Language quiz" />
        <PageLink link="/currency" title="Currency quiz" />
      </div>
    </PageLayout>
  );
};

export default Home;
