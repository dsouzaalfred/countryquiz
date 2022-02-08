import type { NextPage } from "next";

import { PageLayout } from "@/layouts/Page";
import { PageTitle } from "@/components/PageTitle";

const Language: NextPage = () => {
  return (
    <PageLayout>
      <PageTitle title="Language quiz" />
      <div className="w-full flex items-center justify-center mb-4">
        <h2>Coming Soon</h2>
      </div>
    </PageLayout>
  );
};

export default Language;
