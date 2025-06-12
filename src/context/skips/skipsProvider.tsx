"use client";

import { mockSkips } from "@/app/select-skip/constants";
import { useGetSkips } from "@/hooks/useSkip";
import { Skip } from "@/services/skip/skip.types";
import { createContext, useContext, useEffect, useState } from "react";
import { SkipsContextValue } from "./skipsProvider.types";

export const SkipsContext = createContext<SkipsContextValue>(null);

export const useSkipsContext = () => {
  const context = useContext(SkipsContext);
  if (context === null) {
    throw new Error("You can only call this hook inside SkipsProvider.");
  }
  return context;
};

const SkipsProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetSkips();
  const [skips, setSkips] = useState<Skip[]>();
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

// Using mock data as a fallback in case the API returns a "Project not specified" error
  useEffect(() => setSkips(data || mockSkips), [data]);

  if (skips)
    return (
      <SkipsContext.Provider value={{ skips, selectedSkip, setSelectedSkip }}>
        {children}
      </SkipsContext.Provider>
    );
};

export default SkipsProvider;
