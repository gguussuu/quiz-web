import { useNavigate } from "react-router-dom";
import ReviewQuizItem from "../components/ReviewQuizItem";

const ReviewNotes = () => {
  const navigate = useNavigate();
  const getWrongQuiz = localStorage.getItem("wrongQuiz");
  const getMyChoice = localStorage.getItem("choiceAnswers");
  const wrongQuizList: IQuiz[] = JSON.parse(getWrongQuiz as string);
  const choiceList: string[] = JSON.parse(getMyChoice as string);

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full bg-red-100 relative flex pb-40 min-h-screen">
      <main className="w-full max-w-5xl mx-auto relative flex flex-col items-center mt-20">
        <h2 className="text-center font-bold text-4xl text-red-500">
          오답노트
        </h2>
        <p className="mt-3 font-medium text-lg">
          총 10문제 중 {wrongQuizList.length}문제를 틀렸습니다.
        </p>
        {wrongQuizList.length === 0 ? (
          <div className="mt-10 text-center font-bold text-2xl">
            오답 풀이할 문제가 없습니다.
          </div>
        ) : (
          <ul className="mt-20 flex flex-col gap-y-8">
            <li className="flex ml-auto items-center gap-x-1 text-sm">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span>내가 고른 답</span>
              <span className="w-3 h-3 rounded-full bg-green-500 ml-2"></span>
              <span>정답</span>
            </li>
            {wrongQuizList?.map((quiz, index) => {
              const answerList = quiz.incorrect_answers
                .concat(quiz.correct_answer)
                .sort();
              return (
                <ReviewQuizItem
                  key={quiz.question}
                  quiz={quiz}
                  answerList={answerList}
                  choiceList={choiceList}
                  index={index}
                />
              );
            })}
          </ul>
        )}
        <button
          className="inline-flex mt-10 px-5 py-2 bg-gray-400 text-white items-center justify-center rounded-md font-bold hover:bg-red-500 transition-all"
          onClick={goToHome}
        >
          홈으로 돌아가기
        </button>
      </main>
    </div>
  );
};
export default ReviewNotes;
