import { useState } from "react";
import Fact from "./components/Fact";
import useFacts from "./hooks/useFacts";
import useFilterFacts from "./hooks/useFilterFacts";
import useSortFacts from "./hooks/useSortFacts";

export const Challenge1 = () => {
  const { facts, factsDispatcher, resetAndGetNewFacts, loading } = useFacts();
  const [factsNumber, setFactsNumber] = useState(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFactsNumber(parseInt(e.target.value));
  };
  const { removeAllUnsavedFacts, resetFacts, saveFact, unsaveFact } =
    useFilterFacts({ facts, factsDispatcher });
  const {
    alphabeticalOrder,
    indexOrder,
    sortFactsAlphabetically,
    sortFactsByIndex,
    shuffleFacts,
  } = useSortFacts({ facts, factsDispatcher });

  return (
    <>
      <header>
        <h3>Challenge 1: Populating your UI with Fetched Data</h3>
      </header>
      <p>
        <strong>
          Check <code>src/challenges/1/instructions.txt</code> for instructions.
        </strong>
        <br />
        Code is located in <code>src/challenges/1/index.tsx</code>.
      </p>
      <input
        placeholder="number of facts"
        type="number"
        onChange={handleInputChange}
      />{" "}
      |{" "}
      <button onClick={() => resetAndGetNewFacts(factsNumber)}>
        Reset table and get new facts
      </button>{" "}
      <hr />
      <button onClick={removeAllUnsavedFacts}>
        Remove all unsaved facts from table
      </button>{" "}
      | <button onClick={resetFacts}>Empty table</button>
      <hr />
      <button onClick={sortFactsAlphabetically}>
        {alphabeticalOrder === "asc"
          ? "Sort alphabetically (a to z)"
          : "Sort alphabetically (z to a)"}
      </button>{" "}
      |{" "}
      <button onClick={sortFactsByIndex}>
        {indexOrder === "asc"
          ? "sort by index ascending"
          : "sort by index descending"}
      </button>{" "}
      | <button onClick={shuffleFacts}>Shuffle rows</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Fact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td>null</td>
              <td>facts are loading...</td>
              <td>
                <button disabled>loading</button>
              </td>
            </tr>
          ) : (
            facts?.map((fact, index) => (
              <Fact
                key={index}
                {...fact}
                handleSave={saveFact}
                handleUnSave={unsaveFact}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};
