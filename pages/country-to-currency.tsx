import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PageLayout } from "@/layouts/Page";
import { QuestionCard } from "@/components/QuestionCard";
import { PageTitle } from "@/components/PageTitle";

import {
  getRandomIndex,
  constructCurrencyOptions,
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

  const options = constructCurrencyOptions(possibleAnswers, data);

  shuffleArray(options);

  return {
    props: {
      answerCode: data[randomCountry].code,
      options: options,
      questionType: "capitalToCountry",
      question: data[randomCountry].name,
    },
  };
};

const CountryToCurrency: NextPage = ({
  answerCode,
  options,
  questionType,
  question,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <PageTitle title="Guess the currency of this country" />
      <QuestionCard
        answerCode={answerCode}
        options={options}
        questionType={questionType}
        question={question}
      />
    </PageLayout>
  );
};

export default CountryToCurrency;