import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-red-100">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-6xl text-red-500 mb-20">QUIZ TIME</h1>
          <Link
            to="/quiz"
            className="text-center py-2 px-9 rounded border border-red-500 text-red-500 bg-white font-semibold text-lg hover:shadow-md hover:shadow-red-300"
          >
            퀴즈 풀기
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
