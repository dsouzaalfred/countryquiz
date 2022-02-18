import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PageLayout } from "@/layouts/Page";
import { QuestionCard } from "@/components/QuestionCard";
import { PageTitle } from "@/components/PageTitle";

import {
  getRandomIndex,
  constructLanguageOptions,
  shuffleArray,
  getFourOptions,
} from "@/utils/index";

import data from "@/data/countries.json";

export const getServerSideProps: GetServerSideProps = async () => {
  const optionsArray = getFourOptions(data.length);
  const questionIndex = getRandomIndex(4);
  const question = data[optionsArray[questionIndex]];

  const options = constructLanguageOptions(optionsArray, data);

  shuffleArray(options);

  return {
    props: {
      answerCode: question.code,
      options: options,
      questionType: "capitalToCountry",
      question: question.name,
    },
  };
};

const CountryToLanguage: NextPage = ({
  answerCode,
  options,
  questionType,
  question,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <PageTitle title="Guess the language spoken in this country" />
      <QuestionCard
        answerCode={answerCode}
        options={options}
        questionType={questionType}
        question={question}
      />
    </PageLayout>
  );
};

export default CountryToLanguage;
