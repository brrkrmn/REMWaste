import { Skip } from "@/services/skip/skip.types";

export type SkipsContextValue = null | {
  skips: Skip[];
  selectedSkip: Skip | null;
  setSelectedSkip: (data: Skip | null) => void;
};