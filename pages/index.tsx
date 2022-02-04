import type { NextPage } from "next";
import Link from "next/link";

import { PageLayout } from "@/layouts/Page";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/flags">
            <a className="font-bold text-blue-600 text-2xl ">Flags</a>
          </Link>
          <br />
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/capitals">
            <a className="font-bold text-blue-600 text-2xl ">Capitals</a>
          </Link>
          <br />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
