import { factType } from "../../types/fact";

export type factProps = factType & {
  handleSave: (index: number) => void;
  handleUnSave: (index: number) => void;
};
