import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { Card } from "@/components/Card";

import { QuestionsOptions } from "@/components/QuestionsOptions";

interface Options {
  label: string;
  value: string;
}

interface QuestionCardProps {
  flag: string;
  capital?: string;
  questionType?: "flag" | "capital";
  options: Options[];
}

export const QuestionCard = ({
  flag,
  capital,
  options,
  questionType = "flag",
}: QuestionCardProps) => {
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const router = useRouter();

  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsError(false);
    const answer = e.target.answer.value;
    if (!answer) {
      setIsError(true);
      return;
    }
    if (answer === flag) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setIsShowAnswer(true);
  };

  const handleNextClick = () => {
    router.reload();
  };

  const getCorrectAnswer = () => {
    let answer = "";
    options.forEach((el) => {
      if (el.value === flag) {
        answer = el.label;
      }
    });
    return answer;
  };

  return (
    <Card>
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center justify-center mb-4">
          {questionType === "flag" && (
            <p className="font-bold text-sky-600">Whose flag is it?</p>
          )}
          {questionType === "capital" && (
            <p className="font-bold text-sky-600">Whose capital is it?</p>
          )}
        </div>
        {questionType === "capital" && (
          <div className="w-full flex items-center justify-center mb-4">
            <span className="font-bold text-3xl text-teal-800">{capital}</span>
          </div>
        )}
        {questionType === "flag" && (
          <div className="w-full flex items-center justify-center mb-4">
            <Image src={`/${flag}.jpg`} alt="Flag" height={213} width={320} />
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full p-8">
            <QuestionsOptions questions={options} />
            {isError && <p className="text-red-600">Please select an answer</p>}
            {isShowAnswer && isAnswerCorrect && (
              <p className="text-green-600">Correct!</p>
            )}
            {isShowAnswer && !isAnswerCorrect && (
              <p className="text-red-700">
                Correct answer is{" "}
                <span className="font-bold underline">
                  {getCorrectAnswer()}
                </span>
              </p>
            )}
          </div>
          <div className="flex items-center justify-end px-8">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-200"
              type="submit"
              value="Submit"
              disabled={isShowAnswer}
            />
            {isShowAnswer && (
              <input
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 w-20"
                value="Next"
                onClick={handleNextClick}
              />
            )}
          </div>
        </form>
      </div>
    </Card>
  );
};
