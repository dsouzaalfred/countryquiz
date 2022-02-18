import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PageLayout } from "@/layouts/Page";
import { QuestionCard } from "@/components/QuestionCard";
import { PageTitle } from "@/components/PageTitle";

import {
  getRandomIndex,
  constructFlagOptions,
  shuffleArray,
  getFourOptions,
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
      questionType: "flagToCountry",
      question: question.code,
    },
  };
};

const FlatToCountry: NextPage = ({
  answerCode,
  options,
  questionType,
  question,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <PageTitle title="Guess the country" />
      <QuestionCard
        answerCode={answerCode}
        options={options}
        questionType={questionType}
        question={question}
      />
    </PageLayout>
  );
};

export default FlatToCountry;
