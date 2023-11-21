import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizComplete from "./pages/QuizComplete";
import ReviewNotes from "./pages/ReviewNotes";

function App() {
  return (
    <div>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/notes" element={<ReviewNotes />} />
        <Route path="/complete" element={<QuizComplete />} />
      </Routes>
    </div>
  );
}

export default App;
