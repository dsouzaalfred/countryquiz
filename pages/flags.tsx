import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PageLayout } from "@/layouts/Page";
import { QuestionCard } from "@/components/QuestionCard";

import data from "@/data/countries.json";

interface Options {
  label: string;
  value: string;
}

const getRandomIndex = (length: number) => Math.floor(Math.random() * length);

const constructOptions = (options: number[]): Options[] => {
  const arr = options.map((option) => {
    const country = data[option];
    return { label: country.name, value: country.code };
  });
  return arr;
};

const shuffleArray = (array: Options[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  const randomCountry = getRandomIndex(data.length);

  const possibleAnswers: number[] = [
    randomCountry,
    getRandomIndex(data.length),
    getRandomIndex(data.length),
    getRandomIndex(data.length),
  ];

  const options = constructOptions(possibleAnswers);

  shuffleArray(options);

  return {
    props: {
      flag: data[randomCountry].code,
      options: options,
    },
  };
};

const Home: NextPage = ({
  flag,
  options,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <QuestionCard flag={flag} options={options} />
    </PageLayout>
  );
};

export default Home;
