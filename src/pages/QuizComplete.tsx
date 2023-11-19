import { useNavigate } from "react-router-dom";
import translateTime from "../utils/formatTIme";

const QuizComplete = () => {
  const navigate = useNavigate();
  const correct = localStorage.getItem("correct");
  const incorrect = localStorage.getItem("incorrect");
  const time = localStorage.getItem("time");
  const correctWidth = (Number(correct) / 10) * 100;

  const goToHome = () => {
    navigate("/");
  };

  const goToReviewNote = () => {
    navigate("/notes");
  };

  return (
    <div className="w-full h-screen bg-red-100 relative flex items-center justify-center">
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h2 className="font-bold text-4xl text-red-500">결과</h2>
        <ul className="mt-10 grid grid-cols-3 items-center justify-center px-6 py-4 w-[600px] rounded-lg bg-white">
          <li className="rounded-md px-2 py-4 w-full font-bold text-lg flex flex-col gap-x-5 items-center">
            <p className="text-white rounded-full w-[100px] h-[100px] inline-flex items-center justify-center bg-red-500">
              {translateTime(Number(time))}
            </p>
            <span className="inline-block mt-2 font-bold text-gray-700">
              소요시간
            </span>
          </li>
          <li className="rounded-md px-2 py-4 w-full font-bold text-lg flex flex-col gap-x-5 items-center">
            <p className="text-white rounded-full text-xl w-[100px] h-[100px] inline-flex items-center justify-center bg-red-500">
              {correct}
              <span className="inline-block ml-1 text-gray-100">/ 10</span>
            </p>
            <span className="inline-block mt-2 font-bold text-gray-700">
              정답 수
            </span>
          </li>
          <li className="rounded-md px-2 py-4 w-full font-bold text-lg flex flex-col gap-x-5 items-center">
            <p className="text-white rounded-full text-xl w-[100px] h-[100px] inline-flex items-center justify-center bg-gray-400/80">
              {incorrect}
              <span className="inline-block ml-1 text-gray-100">/ 10</span>
            </p>
            <span className="inline-block mt-2 font-bold text-gray-700">
              오답 수
            </span>
          </li>
          <li
            className="font-medium flex flex-col w-full col-span-3"
            id="chart"
          >
            <p className="mt-4 font-bold text-base">정답률</p>
            <div className="relative w-full border h-10 mt-2 border-red-500">
              <div
                className="absolute top-0 left-0 bg-red-500 h-full flex items-center justify-center"
                style={{ width: `${correctWidth}%` }}
              >
                <p className="text-white text-sm">{correctWidth}%</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex items-center gap-x-3">
          <button
            className="inline-flex mt-10 px-5 py-2 bg-red-500 text-white items-center justify-center rounded-md font-bold hover:bg-red-400 transition-all"
            onClick={goToReviewNote}
          >
            틀린 문제 보러가기
          </button>
          <button
            className="inline-flex mt-10 px-5 py-2 bg-gray-400 text-white items-center justify-center rounded-md font-bold hover:bg-red-500 transition-all"
            onClick={goToHome}
          >
            홈으로 돌아가기
          </button>
        </div>
      </section>
    </div>
  );
};
export default QuizComplete;
