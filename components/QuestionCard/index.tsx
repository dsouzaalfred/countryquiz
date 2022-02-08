import { useRouter } from "next/router";
import { useState } from "react";

import { Card } from "@/components/Card";

import { Question } from "@/components/Question";
import { QuestionsOptions } from "@/components/QuestionsOptions";
import { Message } from "@/components/Message";

import { QuestionCardProps } from "@/types/types";

export const QuestionCard = ({
  answerCode,
  options,
  questionType,
  question,
}: QuestionCardProps) => {
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const router = useRouter();

  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = (answer: string) => {
    setIsError(false);
    if (!answer) {
      setIsError(true);
      return;
    }
    setSelectedAnswer(answer);
    if (answer === answerCode) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setIsShowAnswer(true);
  };

  const handleNextClick = () => {
    router.reload();
  };

  return (
    <Card>
      <div className="flex flex-col w-full">
        <Question questionType={questionType} question={question} />
        <>
          <div className="flex flex-col w-full p-8">
            <QuestionsOptions
              questions={options}
              onSelect={handleSubmit}
              selectedAnswer={selectedAnswer}
              isAnswerCorrect={isAnswerCorrect}
              questionType={questionType}
            />
            <Message
              isError={isError}
              isShowAnswer={isShowAnswer}
              isAnswerCorrect={isAnswerCorrect}
            />
          </div>
          <div className="flex items-center justify-end px-8">
            {isAnswerCorrect && (
              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2 w-20 hover:bg-blue-800"
                onClick={handleNextClick}
              >
                Next
              </button>
            )}
          </div>
        </>
      </div>
    </Card>
  );
};
