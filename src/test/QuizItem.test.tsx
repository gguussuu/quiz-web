import { useState } from "react";
import QuizItem from "../components/QuizItem";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

test("radio 체크 테스트", async () => {
  const QuizItemWrapper = () => {
    const [answerValue, setAnswerValue] = useState<string>("");
    return (
      <QuizItem
        idx={0}
        answer="1번"
        answerValue={answerValue}
        setAnswerValue={setAnswerValue}
        isSelect={false}
      />
    );
  };
  render(<QuizItemWrapper />);
  expect(screen.getByRole("radio")).toBeInTheDocument();
  const labelRadio: HTMLInputElement = screen.getByLabelText("1번");
  expect(labelRadio.checked).toEqual(false);
  fireEvent.click(labelRadio);
  expect(labelRadio.checked).toEqual(true);
});
