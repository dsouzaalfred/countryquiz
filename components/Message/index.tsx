interface MessageProps {
  isError: boolean;
  isShowAnswer: boolean;
  isAnswerCorrect: boolean;
}
export const Message = ({
  isError,
  isShowAnswer,
  isAnswerCorrect,
}: MessageProps) => {
  return (
    <>
      {isError && <p className="text-red-600">Please select an answer</p>}
      {isShowAnswer && isAnswerCorrect && (
        <p className="text-green-600">Correct!</p>
      )}
      {isShowAnswer && !isAnswerCorrect && (
        <p className="text-red-700">Wrong answer! Try Again.</p>
      )}
    </>
  );
};
