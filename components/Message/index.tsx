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
      {isError && <p className="text-wrong">Please select an answer</p>}
      {isShowAnswer && isAnswerCorrect && (
        <p className="text-right">Correct!</p>
      )}
      {isShowAnswer && !isAnswerCorrect && (
        <p className="text-wrong">Wrong answer! Try Again.</p>
      )}
    </>
  );
};
