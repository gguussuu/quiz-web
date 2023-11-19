interface ICoreectDialogProps {
  onClose: () => void;
  isCorrect: boolean;
}

const CorrectDialog = ({ onClose, isCorrect }: ICoreectDialogProps) => {
  return (
    <div className="fixed inset-0 bg-gray-900/70">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-200 bg-white w-[500px] rounded-lg p-4">
        <p className="font-bold text-xl">정답 확인</p>
        <div className="mt-5 flex items-center gap-x-3">
          <div className="w-7 h-auto">
            <img src={isCorrect ? "/check.png" : "/delete.png"} alt="correct" />
          </div>
          <p className="text-lg font-semibold leading-6 text-gray-900">
            {isCorrect ? "정답입니다." : "오답입니다."}
          </p>
        </div>
        <div className="flex justify-between mt-5 w-full">
          <button
            type="button"
            className="ml-auto text-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
export default CorrectDialog;
