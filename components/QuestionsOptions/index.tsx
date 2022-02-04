import { Options } from "@/components/Options";

interface OptionsProps {
  label: string;
  value: string;
  className?: string;
}
interface QuestionsOptionsProps {
  questions: OptionsProps[];
  isAnswerCorrect?: boolean;
  selectedAnswer?: string;
}

export const QuestionsOptions = ({ questions }: QuestionsOptionsProps) => {
  return (
    <div className="flex flex-col w-full p-8">
      {questions.map((question, index) => (
        <div key={index}>
          <Options
            label={question.label}
            value={question.value}
            className="flex mb-2"
          />
        </div>
      ))}
    </div>
  );
};
