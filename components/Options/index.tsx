import Image from "next/image";
import clsx from "clsx";

interface OptionsProps {
  label: string;
  value: string;
  onSelect: (value: string) => void;
  selectedAnswer: string;
  isAnswerCorrect: boolean;
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

export const Options = ({
  label,
  value,
  onSelect,
  selectedAnswer,
  isAnswerCorrect,
  questionType,
}: OptionsProps) => {
  return (
    <button
      className={clsx(
        "text-black font-medium tracking-wide text-lg border-solid border-2 border-secondary p-2 md:p-4 w-full rounded-md cursor-pointer mt-2",
        {
          "bg-wrong": selectedAnswer === value && !isAnswerCorrect,
          "bg-right": selectedAnswer === value && isAnswerCorrect,
        }
      )}
      onClick={(e) => {
        e.preventDefault();
        if (isAnswerCorrect) return;
        onSelect(value);
      }}
    >
      <>{questionType !== "countryToFlag" && label}</>
      <>
        {questionType === "countryToFlag" && (
          <Image src={`/${value}.jpg`} alt="Flag" height={63} width={120} />
        )}
      </>
    </button>
  );
};
