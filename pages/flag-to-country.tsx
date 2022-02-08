import type { NextPage } from "next";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PageLayout } from "@/layouts/Page";
import { QuestionCard } from "@/components/QuestionCard";
import { PageTitle } from "@/components/PageTitle";

import { getRandomIndex, constructOptions, shuffleArray } from "@/utils/index";

import data from "@/data/countries.json";

export const getServerSideProps: GetServerSideProps = async () => {
  const randomCountry = getRandomIndex(data.length);

  const possibleAnswers: number[] = [
    randomCountry,
    getRandomIndex(data.length),
    getRandomIndex(data.length),
    getRandomIndex(data.length),
  ];

  const options = constructOptions(possibleAnswers, data);

  shuffleArray(options);

  return {
    props: {
      answerObject: data[randomCountry],
      options: options,
      questionType: "flagToCountry",
      question: data[randomCountry].code,
    },
  };
};

const Home: NextPage = ({
  answerObject,
  options,
  questionType,
  question,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PageLayout>
      <PageTitle title="Which country's flag is this?" />
      <QuestionCard
        answerObject={answerObject}
        options={options}
        questionType={questionType}
        question={question}
      />
    </PageLayout>
  );
};

export default Home;
