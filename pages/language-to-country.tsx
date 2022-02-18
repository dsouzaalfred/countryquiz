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
      questionType: "capitalToCountry",
      question: question.language.name,
    },
  };
};

const LanguageToCountry: NextPage = ({
  answerCode,
  options,
  questionType,
  question,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <PageTitle title="Guess the country where this language is spoken" />
      <QuestionCard
        answerCode={answerCode}
        options={options}
        questionType={questionType}
        question={question}
      />
    </PageLayout>
  );
};

export default LanguageToCountry;
