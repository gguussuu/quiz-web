import { render, screen } from "@testing-library/react";
import App from "../App";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

test("home화면에 QUIZ TIME 텍스트가 노출되고 있는지 테스트", () => {
  render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  );
  const textElement = screen.getByText("QUIZ TIME");
  expect(textElement).toBeInTheDocument();
});

test("퀴즈 풀기 LINK 테스트", () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
  const links: HTMLAnchorElement[] = screen.getAllByRole("link");

  expect(links[0].textContent).toEqual("퀴즈 풀기");
  expect(links[0].href).toContain("/quiz/1");
});
