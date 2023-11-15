const QuizComplete = () => {
    return (
      <div className="w-full h-screen bg-red-100 relative">
        <section className="mt-10 w-full max-w-5xl mx-auto">
          <h2 className="text-center font-bold text-lg">결과</h2>
          <ul className="mt-8 flex flex-col gap-y-2">
            <li>소요시간</li>
            <li>정답 수</li>
            <li>오답 수</li>
            <li>정/오답에 대한 비율 차트</li>
          </ul>
        </section>
      </div>
    );
  };
  export default QuizComplete;
  