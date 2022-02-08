import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PageLayout } from "@/layouts/Page";
import { QuestionCard } from "@/components/QuestionCard";
import { PageTitle } from "@/components/PageTitle";

import {
  getRandomIndex,
  constructCapitalOptions,
  shuffleArray,
} from "@/utils/index";

import data from "@/data/countries.json";

export const getServerSideProps: GetServerSideProps = async () => {
  const randomCountry = getRandomIndex(data.length);

  const possibleAnswers: number[] = [
    randomCountry,
    getRandomIndex(data.length),
    getRandomIndex(data.length),
    getRandomIndex(data.length),
  ];

  const options = constructCapitalOptions(possibleAnswers, data);

  shuffleArray(options);

  return {
    props: {
      answerObject: data[randomCountry],
      options: options,
      questionType: "capitalToCountry",
      question: data[randomCountry].name,
    },
  };
};

const CountryToCapital: NextPage = ({
  answerObject,
  options,
  questionType,
  question,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <PageTitle title="What is the capital of?" />
      <QuestionCard
        answerObject={answerObject}
        options={options}
        questionType={questionType}
        question={question}
      />
    </PageLayout>
  );
};

export default CountryToCapital;
