const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src="/spinner.gif" alt="spinner" />
      <p className="font-bold text-4xl text-red-500">로딩 중..</p>
    </div>
  );
};

export default Loading;
