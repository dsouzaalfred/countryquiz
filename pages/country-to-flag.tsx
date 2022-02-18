import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PageLayout } from "@/layouts/Page";
import { QuestionCard } from "@/components/QuestionCard";
import { PageTitle } from "@/components/PageTitle";

import {
  getFourOptions,
  constructFlagOptions,
  shuffleArray,
  getRandomIndex,
} from "@/utils/index";

import data from "@/data/countries.json";

export const getServerSideProps: GetServerSideProps = async () => {
  const optionsArray = getFourOptions(data.length);
  const questionIndex = getRandomIndex(4);
  const question = data[optionsArray[questionIndex]];

  const options = constructFlagOptions(optionsArray, data);

  shuffleArray(options);

  return {
    props: {
      answerCode: question.code,
      options: options,
      questionType: "countryToFlag",
      question: question.name,
    },
  };
};

const CountryToFlag: NextPage = ({
  answerCode,
  options,
  questionType,
  question,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <PageTitle title="Guess the flag" />
      <QuestionCard
        answerCode={answerCode}
        options={options}
        questionType={questionType}
        question={question}
      />
    </PageLayout>
  );
};

export default CountryToFlag;
