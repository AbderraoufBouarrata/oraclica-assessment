import React, { useReducer } from "react";
import { getFacts } from "../../../../api/client";
import { factsType } from "../../types/fact";
import useLocalStorage from "../useLocalStorage";
import { factsReducer } from "./useFacts.helpers";

export default function useFacts() {
  const value = useLocalStorage({
    key: "facts",
    defaultValue: [],
  });
  const initialFacts: factsType = value[0];
  const [facts, factsDispatcher] = useReducer(factsReducer, initialFacts);
  const [loading, setLoading] = React.useState(false);

  const resetAndGetNewFacts = async (amount: number) => {
    if (amount < 0) return;
    if (amount === 0) factsDispatcher({ type: "SET_FACTS", initialFacts });
    try {
      setLoading(true);
      const result = await getFacts(amount);
      const facts = result.map((description, index) => ({
        index,
        description,
        isSaved: false,
      }));
      setLoading(false);
      factsDispatcher({ type: "SET_FACTS", facts });
    } catch (e) {
      setLoading(false);
      throw new Error("Error fetching facts");
    }
  };

  return {
    facts,
    factsDispatcher,
    loading,
    resetAndGetNewFacts,
  };
}
