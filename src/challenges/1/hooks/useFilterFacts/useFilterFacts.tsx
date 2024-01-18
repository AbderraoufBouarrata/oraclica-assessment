import { useFilterFactsProps } from "./useFilterFacts.types";

export default function useFilterFacts(props: useFilterFactsProps) {
  const { facts, factsDispatcher } = props;
  const removeAllUnsavedFacts = () => {
    const savedFacts = facts.filter((fact) => fact.isSaved);
    factsDispatcher({ type: "SET_FACTS", facts: savedFacts });
  };
  const resetFacts = () => {
    factsDispatcher({ type: "RESET_FACTS" });
  };

  const saveFact = (index: number) => {
    factsDispatcher({ type: "SAVE_FACT", index });
  };

  const unsaveFact = (index: number) => {
    factsDispatcher({ type: "UNSAVE_FACT", index });
  };

  return {
    removeAllUnsavedFacts,
    resetFacts,
    saveFact,
    unsaveFact,
  };
}
