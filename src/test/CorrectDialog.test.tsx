import { fireEvent, render,screen } from "@testing-library/react";
import CorrectDialog from "../components/CorrectDialog";

test("다이얼로그 정답일 때, 닫기 기능 테스트", () => {
  const handleClose = jest.fn();

  render(<CorrectDialog onClose={handleClose} isCorrect={true} />);
  expect(screen.getByText('정답 확인')).toBeInTheDocument()
  expect(screen.getByText('정답입니다.')).toBeInTheDocument()

  fireEvent.click(screen.getByText("닫기"))
  expect(handleClose).toHaveBeenCalledTimes(1)
});

test("다이얼로그 오답일 때, 닫기 기능 테스트", () => {
    const handleClose = jest.fn();
  
    render(<CorrectDialog onClose={handleClose} isCorrect={false} />);
    expect(screen.getByText('정답 확인')).toBeInTheDocument()
    expect(screen.getByText('오답입니다.')).toBeInTheDocument()
  
    fireEvent.click(screen.getByText("닫기"))
    expect(handleClose).toHaveBeenCalledTimes(1)
  });
