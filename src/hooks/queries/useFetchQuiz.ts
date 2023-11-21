import axios from "axios";
import { useQuery } from "react-query";

interface IQuizData {
  response_code: number;
  results: IQuiz[];
}

const useFetchQuiz = () => {
  const fetchQuiz = async () => {
    const res = await axios.get<IQuizData>(
      "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
    );
    return res.data;
  };

  const { data, isLoading, error, isSuccess } = useQuery("quizList", fetchQuiz, {
    staleTime: Infinity,
    cacheTime: Infinity,
    select: (data) => data.results,
  });

  return { data, isLoading, error, isSuccess };
};

export default useFetchQuiz;
