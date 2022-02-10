import Image from "next/image";

interface QuestionProps {
  questionType:
    | "flagToCountry"
    | "capitalToCountry"
    | "currencyToCountry"
    | "languageToCountry"
    | "countryToFlag"
    | "countryToCapital"
    | "countryToCurrency"
    | "countryToLanguage";
  question: string;
}

export const Question = ({ questionType, question }: QuestionProps) => {
  return (
    <>
      {questionType !== "flagToCountry" && (
        <div className="w-full flex items-center justify-center">
          <span className="font-bold text-3xl text-black">{question}</span>
        </div>
      )}
      {questionType === "flagToCountry" && (
        <div className="w-full flex items-center justify-center">
          <Image src={`/${question}.jpg`} alt="Flag" height={213} width={320} />
        </div>
      )}
    </>
  );
};
