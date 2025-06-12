"use client";

import { queryClient } from "@/utils/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const qClient = queryClient();
  return (
    <QueryClientProvider client={qClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;