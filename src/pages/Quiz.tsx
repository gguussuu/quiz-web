import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CorrectDialog from "../components/CorrectDialog";
import useFetchQuiz from "../hooks/queries/useFetchQuiz";
import translateTime from "../utils/formatTIme";
import QuizItem from "../components/QuizItem";
import convertHTMLtag from "../utils/convertHTMLtag";
import Loading from "../components/Loading";

type QuizParams = {
  id: string;
};

const Quiz = () => {
  const { id } = useParams<QuizParams>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
  const [sec, setSec] = useState(0);
  const [wrongQuiz, setWrongQuiz] = useState<IQuiz[]>([]);
  const [choiceAnswer, setChoiceAnswer] = useState<string[]>([]);
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
  const correctNum = Number(localStorage.getItem("correct"));
  const incorrectNum = Number(localStorage.getItem("incorrect"));
  const isSelect = answerValue !== "";

  useEffect(() => {
    const time = setInterval(() => {
      setSec(sec + 1);
    }, 1000);
    return () => clearInterval(time);
  }, [sec]);

  const checkCorrect = useCallback(
    (answer: string) => {
      if (answer === quizItem.correct_answer)
        localStorage.setItem("correct", (correctNum + 1).toString());
      else {
        const wrong = wrongQuiz;
        wrong.push(quizItem);
        const choice = choiceAnswer;
        choice.push(answerValue);
        localStorage.setItem("incorrect", (incorrectNum + 1).toString());
        localStorage.setItem("wrongQuiz", JSON.stringify(wrongQuiz));
        localStorage.setItem("choiceAnswers", JSON.stringify(choiceAnswer));
      }
    },
    [quizItem, correctNum, wrongQuiz, choiceAnswer, answerValue, incorrectNum]
  );

  const answerList = useMemo(() => {
    const incorrectList = quizItem.incorrect_answers;
    const list = incorrectList.concat(quizItem.correct_answer);
    return list.sort();
  }, [quizItem.correct_answer, quizItem.incorrect_answers]);
  const isLast = quizId === quizList?.length;

  const handleSubmit = useCallback(
    (answer: string) => {
      checkCorrect(answer);
      setAnswerValue("");
      if (isLast) {
        localStorage.setItem("time", sec.toString());
        navigate("/complete");
      } else {
        navigate(`/quiz/${quizId + 1}`);
      }
    },
    [checkCorrect, isLast, navigate, quizId, sec]
  );

  const onClickCorrect = () => {
    if (answerValue === quizItem.correct_answer) {
      setIsCorrect(true);
    }
    setIsDialogOpen(true);
  };

  const onDialogClose = () => {
    setIsDialogOpen(false);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="w-full h-screen bg-red-100 relative flex items-center justify-center">
      <main className="w-full max-w-5xl mx-auto relative">
        <h2 className="font-bold text-4xl">
          Q{quizId}. {convertHTMLtag(quizItem.question)}
        </h2>
        <ul className="flex flex-col mt-10 gap-3">
          {answerList.map((answer, idx) => (
            <QuizItem
              idx={idx}
              answer={answer}
              answerValue={answerValue}
              setAnswerValue={setAnswerValue}
              isSelect={isSelect}
              key={answer}
            />
          ))}
        </ul>
        <footer className="w-full mt-20">
          <div className="w-full max-w-5xl mx-auto flex justify-between">
            <div className="flex flex-col items-center bg-white rounded px-4 justify-center shadow-md py-1">
              <p className="font-bold text-lg">소요 시간</p>
              <p className="font-bold text-lg">{translateTime(sec)}</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded px-4 justify-center shadow-md ml-4 py-1">
              <p className="font-bold text-lg">남은 문제</p>
              <p className="font-bold text-lg">{quizId}/10</p>
            </div>
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
                onClick={() => handleSubmit(answerValue)}
                disabled={answerValue === ""}
                className="px-5 py-2 bg-red-400 rounded-md text-center text-white font-bold disabled:bg-gray-400"
              >
                {isLast ? "결과 확인하러 가기" : "다음 문제"}
              </button>
            </div>
          </div>
        </footer>
        {isDialogOpen && (
          <CorrectDialog onClose={onDialogClose} isCorrect={isCorrect} />
        )}
      </main>
    </div>
  );
};

export default Quiz;
