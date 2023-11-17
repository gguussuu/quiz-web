import { Dialog } from "@headlessui/react";

interface ICoreectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isCorrect: boolean;
}

const CorrectDialog = ({ isOpen, onClose, isCorrect }: ICoreectDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>정답 확인</Dialog.Title>
        <div className="mt-2 flex items-center gap-x-3">
          <div className="w-5 h-5">
            <img src={isCorrect ? "check.png" : "delete.png"} alt="correct" />
          </div>
          <p className="text-base font-semibold leading-6 text-gray-900">
            {isCorrect ? "정답입니다." : "오답입니다."}
          </p>
        </div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          onClick={onClose}
        >
          닫기
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};
export default CorrectDialog;
