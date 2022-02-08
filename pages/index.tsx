import type { NextPage } from "next";
import Link from "next/link";

import { PageLayout } from "@/layouts/Page";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/flag">
            <a className="font-bold text-blue-600 text-2xl ">Flag quiz</a>
          </Link>
          <br />
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/capital">
            <a className="font-bold text-blue-600 text-2xl ">Capital quiz</a>
          </Link>
          <br />
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/language">
            <a className="font-bold text-blue-600 text-2xl ">Language quiz</a>
          </Link>
          <br />
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <Link href="/currency">
            <a className="font-bold text-blue-600 text-2xl ">Currency quiz</a>
          </Link>
          <br />
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
