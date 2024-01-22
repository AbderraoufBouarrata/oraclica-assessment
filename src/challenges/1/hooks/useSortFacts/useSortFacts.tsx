import React from "react";
import { useSortFactsProps } from "./useSortFacts.types";
import { sortingDirection } from "../../types/fact";

export default function useSortFacts(props: useSortFactsProps) {
  const { facts, factsDispatcher } = props;
  const [alphabeticalOrder, setAlphabeticalOrder] =
    React.useState<sortingDirection>(sortingDirection.ASC);
  const [indexOrder, setIndexOrder] = React.useState<sortingDirection>(
    sortingDirection.ASC
  );

  const sortFactsAlphabetically = () => {
    let sortedFacts;
    if (alphabeticalOrder === sortingDirection.ASC) {
      sortedFacts = facts.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
      setAlphabeticalOrder(sortingDirection.DESC);
    } else {
      sortedFacts = facts.sort((a, b) =>
        b.description.localeCompare(a.description)
      );
      setAlphabeticalOrder(sortingDirection.ASC);
    }
    factsDispatcher({ type: "SET_FACTS", facts: sortedFacts });
  };

  const sortFactsByIndex = () => {
    let sortedFacts;
    if (indexOrder === sortingDirection.ASC) {
      sortedFacts = facts.sort((a, b) => a.index - b.index);
      setIndexOrder(sortingDirection.DESC);
    } else {
      sortedFacts = facts.sort((a, b) => b.index - a.index);
      setIndexOrder(sortingDirection.ASC);
    }
    factsDispatcher({ type: "SET_FACTS", facts: sortedFacts });
  };

  const shuffleFacts = () => {
    const shuffledFacts = facts
      .map((value) => ({ value, sort: Math.random() })) // Map each fact to an object with a random sort value
      .sort((a, b) => a.sort - b.sort) // Sort the array of objects based on the random sort values
      .map(({ value }) => value); // Extract the original facts from the sorted array of objects

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
