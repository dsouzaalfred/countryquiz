import type { NextPage } from "next";
import Link from "next/link";

import { PageLayout } from "@/layouts/Page";

const Flag: NextPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/flag-to-country">
            <a className="font-bold text-blue-600 text-2xl ">
              Match flag to country
            </a>
          </Link>
          <br />
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/country-to-flag">
            <a className="font-bold text-blue-600 text-2xl ">
              Match country to flag
            </a>
          </Link>
          <br />
        </div>
      </div>
    </PageLayout>
  );
};

export default Flag;
