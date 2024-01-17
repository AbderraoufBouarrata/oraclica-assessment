import React from "react";
import { useSortFactsProps } from "./useSortFacts.types";

export default function useSortFacts(props: useSortFactsProps) {
  const { facts, factsDispatcher } = props;
  const [alphabeticalOrder, setAlphabeticalOrder] = React.useState<
    "asc" | "desc"
  >("asc");
  const [indexOrder, setIndexOrder] = React.useState<"asc" | "desc">("asc");
  const sortFactsAlphabetically = () => {
    let sortedFacts;
    if (alphabeticalOrder === "asc") {
      sortedFacts = facts.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      setAlphabeticalOrder("desc");
    } else {
      sortedFacts = facts.sort((a, b) =>
        b.description.localeCompare(a.description)
      );
      setAlphabeticalOrder("asc");
    }
    factsDispatcher({ type: "SET_FACTS", facts: sortedFacts });
  };

  const sortFactsByIndex = () => {
    let sortedFacts;
    if (indexOrder === "asc") {
      sortedFacts = facts.sort((a, b) => a.index - b.index);
      setIndexOrder("desc");
    } else {
      sortedFacts = facts.sort((a, b) => b.index - a.index);
      setIndexOrder("asc");
    }
    factsDispatcher({ type: "SET_FACTS", facts: sortedFacts });
  };

  const shuffleFacts = () => {
    // Generate random index to swap elements
    const shuffledFacts = facts
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    factsDispatcher({ type: "SET_FACTS", facts: shuffledFacts });
  };

  return {
    sortFactsAlphabetically,
    sortFactsByIndex,
    shuffleFacts,
    alphabeticalOrder,
    indexOrder,
  };
}
