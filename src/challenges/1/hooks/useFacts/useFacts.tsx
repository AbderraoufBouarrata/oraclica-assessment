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
    if (amount === 0) return factsDispatcher({ type: "SET_FACTS", facts: [] });
    if (!amount) return;
    try {
      setLoading(true);
      const result = await getFacts(amount);
      const facts = result.map((description, index) => ({
        index,
        description,
        isSaved: false,
      }));
      factsDispatcher({ type: "SET_FACTS", facts });
    } catch (e) {
      throw new Error("Error fetching facts");
    } finally {
      setLoading(false);
    }
  };

  return {
    facts,
    factsDispatcher,
    loading,
    resetAndGetNewFacts,
  };
}
