import { Options } from "@/components/Options";

interface OptionsProps {
  label: string;
  value: string;
  className?: string;
}
interface QuestionsOptionsProps {
  questions: OptionsProps[];
  isAnswerCorrect: boolean;
  selectedAnswer: string;
  onSelect: (value: string) => void;
  questionType:
    | "flagToCountry"
    | "capitalToCountry"
    | "currencyToCountry"
    | "languageToCountry"
    | "countryToFlag"
    | "countryToCapital"
    | "countryToCurrency"
    | "countryToLanguage";
}

export const QuestionsOptions = ({
  questions,
  onSelect,
  selectedAnswer,
  isAnswerCorrect,
  questionType,
}: QuestionsOptionsProps) => {
  return (
    <>
      {questions.map((question, index) => (
        <Options
          label={question.label}
          value={question.value}
          onSelect={onSelect}
          selectedAnswer={selectedAnswer}
          key={index}
          isAnswerCorrect={isAnswerCorrect}
          questionType={questionType}
        />
      ))}
    </>
  );
};
