import Image from "next/image";

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
      className={`text-gray-700 font-medium tracking-wide text-lg border-solid border-2 p-3 w-full rounded-md cursor-pointer mt-2 hover:bg-gray-100 ${
        selectedAnswer === value && !isAnswerCorrect ? "bg-red-200" : ""
      } ${selectedAnswer === value && isAnswerCorrect ? "bg-green-400" : ""}`}
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
