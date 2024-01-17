import { useState } from "react";
import { Challenge1 } from "./challenges/1";
import { Challenge2 } from "./challenges/2";
import { Challenge4 } from "./challenges/4";
import "./styles/global.css";
import ErrorBoundary from "./challenges/1/components/ErrorBoundary/ErrorBoundary";
function App() {
  const [tab, setTab] = useState(0);
  const handleClick = (increment: number) => {
    const newTab = tab + increment;
    if (newTab >= 0 && newTab < 54) {
      setTab(newTab);
    }
  };

  return (
    <>
      <main>
        {tab === 0 && <Intro />}
        {tab === 1 && (
          <ErrorBoundary>
            <Challenge1 />
          </ErrorBoundary>
        )}
        {tab === 2 && <Challenge2 />}
        {tab === 3 && <Challenge3 />}
        {tab === 4 && <Challenge4 />}
      </main>
      <footer>
        <button disabled={tab <= 0} onClick={() => handleClick(-1)}>
          Previous
        </button>
        {tab === 0 ? "Intro Page" : "Challenge " + tab}
        <button disabled={tab >= 4} onClick={() => handleClick(1)}>
          Next
        </button>
      </footer>
    </>
  );
}

const Intro = () => {
  return (
    <>
      <header>
        <h3>Welcome to the Oraclica Take-Home Interview!</h3>
      </header>
      <p>
        We have prepared the following challenges for you to work on over the
        next days. They test basic skills and vary in difficulty.
      </p>
      <p>Please take your time and remember to save your work!</p>
      <p>
        When the test is done, or if it's too hard, too easy, or for any other
        questions, please email{" "}
        <a href="mailto:recruitment@oraclica.com">recruitment@oraclica.com</a>
      </p>
      <p>Good luck!</p>
    </>
  );
};

// This is not the place to look at for challenge 3 - go to src/challenges/Challenge3.ts
const Challenge3 = () => {
  return (
    <>
      <header>
        <h3>Challenge 3 - JavaScript/TypeScript Development</h3>
      </header>
      <p>
        This challenge is broken into a series of small tasks.
        <br /> In general, you want to add code to each function to accomplish
        the stated task. <br />
        Your code must pass the associated tests - you can use{" "}
        <code>npm run test</code> to run the tests.
        <p>
          <strong>
            Code and instructions are located in{" "}
            <code>src/challenges/3/index.ts</code>.
            <br />
            The tests can be viewed at <code>tests/employee.test.ts</code>, but
            they should not be modified.
          </strong>
          <br />
        </p>
      </p>
    </>
  );
};

export default App;
