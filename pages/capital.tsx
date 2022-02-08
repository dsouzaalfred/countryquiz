import type { NextPage } from "next";
import Link from "next/link";

import { PageLayout } from "@/layouts/Page";

const Capital: NextPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/capital-to-country">
            <a className="font-bold text-blue-600 text-2xl ">
              Capital to country
            </a>
          </Link>
          <br />
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/country-to-capital">
            <a className="font-bold text-blue-600 text-2xl ">
              Country to capital
            </a>
          </Link>
          <br />
        </div>
      </div>
    </PageLayout>
  );
};

export default Capital;
