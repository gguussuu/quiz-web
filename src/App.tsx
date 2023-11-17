import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizComplete from "./pages/QuizComplete";
import Notes from "./pages/Notes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* 웹 서비스 소개 페이지 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/complete" element={<QuizComplete />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
