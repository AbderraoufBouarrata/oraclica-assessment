export type factType = {
  index: number;
  description: string;
  isSaved: boolean;
};

export type factsType = factType[];

// Action Types
interface ResetFactsAction {
  type: "RESET_FACTS";
  initialFacts: factsType;
}

interface SaveFactAction {
  type: "SAVE_FACT";
  index: number;
}

interface UnsaveFactAction {
  type: "UNSAVE_FACT";
  index: number;
}

interface RemoveFactAction {
  type: "REMOVE_FACT";
  index: number;
}
interface SetStateAction {
  type: "SET_FACTS";
  facts: factsType;
}
export type FactAction =
  | ResetFactsAction
  | SaveFactAction
  | UnsaveFactAction
  | RemoveFactAction
  | SetStateAction;
