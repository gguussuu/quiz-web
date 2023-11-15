const Quiz = () => {
  return (
    <div className="w-full h-screen bg-red-100 relative flex items-center justify-center">
      <section className="w-full max-w-5xl mx-auto">
        <h2 className="font-bold text-4xl">Q1. 문제를 작성합니다.</h2>
        <ul className="flex flex-col mt-10">
          {Array.from({ length: 4 }).map((el, idx) => (
            <li className="flex items-center w-full" key={idx}>
              <div className="relative w-5 h-5 rounded-full border border-gray-500 text-center text-gray-500">
                <input
                  type="radio"
                  name="answer"
                  id={(idx + 1).toString()}
                  value={idx + 1}
                  className="hidden"
                />
                {idx + 1}
              </div>
              <label htmlFor={(idx + 1).toString()}>
                <span className="inline-block ml-1 text-gray-500 w-full bg-white px-2 py-3">
                  답변 {idx + 1}
                </span>
              </label>
            </li>
          ))}
        </ul>
        <footer className="w-full mt-20">
          <div className="w-full max-w-5xl mx-auto flex justify-between">
            <div className="flex self-end items-center gap-x-2 ml-auto">
              <button className="px-5 py-2 bg-gray-400 rounded-md text-center text-white font-bold">
                정답 확인하기
              </button>
              <button className="px-5 py-2 bg-red-400 rounded-md text-center text-white font-bold">
                다음 문제
              </button>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Quiz;
