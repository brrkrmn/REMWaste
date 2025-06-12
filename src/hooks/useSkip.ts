"use client";

import skipService from "@/services/skip/skip";
import { useQuery } from "@tanstack/react-query";

export const useGetSkips = () => {
  return useQuery({
    queryKey: ["skips"],
    queryFn: skipService.getSkips,
    staleTime: 3000,
  });
};