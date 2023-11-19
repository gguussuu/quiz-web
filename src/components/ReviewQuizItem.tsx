import convertHTMLtag from "../utils/convertHTMLtag";

interface IReviewQuizItem {
  quiz: IQuiz;
  answerList: string[];
  choiceList: string[];
  index: number;
}

const ReviewQuizItem = ({
  quiz,
  answerList,
  choiceList,
  index,
}: IReviewQuizItem) => {
  return (
    <li className="w-full bg-white rounded-xl px-8 py-6" key={quiz.question}>
      <p className="font-bold text-xl">Q. {convertHTMLtag(quiz.question)}</p>
      <ul className="mt-5 flex flex-col gap-y-3 w-[500px]">
        {answerList.map((answer, idx) => {
          const isAnswer = answer === quiz.correct_answer;
          const isMyChoice = choiceList[index] === answer;
          return (
            <li
              key={answer}
              className={`${
                isAnswer
                  ? "border-green-400 border-2 text-green-500 font-semibold"
                  : "border-gray-500"
              } ${
                isMyChoice
                  ? "border-red-400 border-2 text-red-500 font-semibold"
                  : "border-gray-500"
              } flex items-center border rounded-full px-3 py-2  text-gray-500`}
            >
              <div
                className={`${
                  isAnswer
                    ? "border-green-400 border-2 text-green-500 font-semibold"
                    : "border-gray-500"
                } ${
                  isMyChoice
                    ? "border-red-400 border-2 text-red-500 font-semibold"
                    : "border-gray-500"
                } relative w-6 h-6 inline-flex items-center justify-center font-medium text-base rounded-full border text-center`}
              >
                {idx + 1}
              </div>
              <p className="ml-2">{answer}</p>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default ReviewQuizItem;
