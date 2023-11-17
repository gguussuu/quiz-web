import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CorrectDialog from "../components/CorrectDialog";
import useFetchQuiz from "../hooks/queries/useFetchQuiz";
import _ from 'lodash'

type QuizParams = {
  id: string;
};

const Quiz = () => {
  const { id } = useParams<QuizParams>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerValue, setAnswerValue] = useState("");

  const navigate = useNavigate();
  const { data: quizList, isLoading } = useFetchQuiz();
  const initialData = {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Television",
    question:
      "Which character was played by Dustin Diamond in the sitcom &#039;Saved by the Bell&#039;?",
    correct_answer: "Screech",
    incorrect_answers: ["Zack", "Mr. Belding", "A.C. Slater"],
  };

  const quizId = id ? Number(id) : 1;
  const quizItem = useMemo(
    () => (quizList ? quizList[quizId - 1] : initialData),
    [quizId, quizList]
  );

  const answerList = useMemo(() => {
    const incorrectList = quizItem.incorrect_answers;
    const list = incorrectList.concat(quizItem.correct_answer);
    return list.sort();
  }, [quizItem.correct_answer, quizItem.incorrect_answers]);
  const isLast = quizId === quizList?.length;

  const handleSubmit = () => {
    localStorage.setItem(quizId.toString(), answerValue);
    if (isLast) navigate("/complete");
    else{
      navigate(`/quiz/${quizId + 1}`);
    }

  };

  const onClickCorrect = () => {
    if (answerValue === quizItem.correct_answer) {
      setIsCorrect(true);
    }
    localStorage.setItem(quizId.toString(), answerValue);
    setIsDialogOpen(true);
  };
  const onDialogClose = () => {
    setIsDialogOpen(false);
  };
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="w-full h-screen bg-red-100 relative flex items-center justify-center">
      <form className="w-full max-w-5xl mx-auto" onSubmit={handleSubmit}>
        <h2 className="font-bold text-4xl">Q. {_.unescape(quizItem.question)}</h2>
        <ul className="flex flex-col mt-10 gap-3">
          {answerList.map((el, idx) => (
            <li className="w-full" key={idx}>
              <input
                type="radio"
                name="answer"
                id={el}
                value={idx + 1}
                className="hidden peer"
                onChange={(e) => setAnswerValue(e.target.value)}
                required
              />
              <label
                htmlFor={el}
                className="flex items-center w-full p-4 rounded-full border bg-white text-gray-500 peer-checked:bg-red-400 peer-checked:text-white"
              >
                <div className="relative w-6 h-6 inline-flex items-center justify-center font-medium text-base rounded-full border border-white text-center">
                  {idx + 1}
                </div>
                <span className="inline-block ml-4 text-lg">{el}</span>
              </label>
            </li>
          ))}
        </ul>
        <footer className="w-full mt-20">
          <div className="w-full max-w-5xl mx-auto flex justify-between">
            <div className="flex self-end items-center gap-x-2 ml-auto">
              {!isLast && (
                <button
                  className="px-5 py-2 bg-gray-400 rounded-md text-center text-white font-bold"
                  onClick={onClickCorrect}
                >
                  정답 확인하기
                </button>
              )}
              <button
                type="submit"
                className="px-5 py-2 bg-red-400 rounded-md text-center text-white font-bold"
              >
                {isLast ? "결과 확인하러 가기" : "다음 문제"}
              </button>
            </div>
          </div>
        </footer>
      </form>
      <CorrectDialog
        isOpen={isDialogOpen}
        onClose={onDialogClose}
        isCorrect={isCorrect}
      />
    </div>
  );
};

export default Quiz;
