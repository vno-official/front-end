"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, PropsWithChildren } from "react";

// const persister = experimental_createQueryPersister({
//   maxAge: 1000 * 60 * 60 * 12, // 12 hours
//   storage: AsyncStorage,
// });

type RqProviderProps = PropsWithChildren;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: (prev: never) => prev,
      refetchOnWindowFocus: false,
      // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // // @ts-expect-error
      // persister: persister.persisterFn,
    },
  },
});

const RqProvider: FC<RqProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default RqProvider;
