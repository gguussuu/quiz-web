interface IQuizItem {
  idx: number;
  answer: string;
  answerValue: string;
  setAnswerValue: (pg: string) => void
  isSelect: boolean;
}

const QuizItem = ({
  idx,
  answer,
  answerValue,
  setAnswerValue,
  isSelect,
}: IQuizItem) => {
  return (
    <li className="w-full" key={idx}>
      <input
        type="radio"
        name="answer"
        id={answer}
        value={answer}
        className="hidden peer"
        onChange={(e) => setAnswerValue(e.target.value)}
        checked={answerValue === answer}
        required
        disabled={isSelect}
      />
      <label
        htmlFor={answer}
        className={`${
          isSelect ? "cursor-not-allowed" : "cursor-pointer"
        } flex items-center w-full p-4 rounded-full border bg-white text-gray-500 peer-checked:bg-red-400 peer-checked:text-white`}
      >
        <div className="relative w-6 h-6 inline-flex items-center justify-center font-medium text-base rounded-full border border-white text-center">
          {idx + 1}
        </div>
        <span className="inline-block ml-4 text-lg">{answer}</span>
      </label>
    </li>
  );
};

export default QuizItem;
