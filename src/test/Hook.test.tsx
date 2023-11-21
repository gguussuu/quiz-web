import { renderHook, waitFor } from "@testing-library/react";
import useFetchQuiz from "../hooks/queries/useFetchQuiz";
import { QueryClient, QueryClientProvider } from "react-query";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: any) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};

test("react-query 테스트", async () => {
  const { result } = renderHook(() => useFetchQuiz(), {
    wrapper: createWrapper(),
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toBeDefined();
});
