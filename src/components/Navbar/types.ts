import { ReactElement } from "react";

export type NavLink = {
  step: number;
  icon: ReactElement;
  text: string;
  path: string;
  disabled: boolean;
}