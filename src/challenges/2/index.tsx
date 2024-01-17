import "./sheet.css";
import { useState } from "react";

export const Challenge2 = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <header>
        <h3>Challenge 2: Using Styles to Display Content</h3>
      </header>
      <p>
        <strong>
          Check <code>src/challenges/2/instructions.txt</code> for instructions.
        </strong>
        <br />
        Code is located in <code>src/challenges/2/index.tsx</code>.
      </p>
      <section className="challenge2">
        <div className="sentence">This is a simple short sentence.</div>
        <div className="flexbox">
          <div>Element 1</div>
          <div>Element 2</div>
          <div>Element 3</div>
        </div>
        <div className="inline" style={{ color: "green", fontWeight: "800" }}>
          This text should be green and have a font weight of 800.
        </div>
        <div className="pseudo">
          <button id="disabledStyledButton" disabled={disabled}>
            I should be red if disabled
          </button>
          <button onClick={() => setDisabled(!disabled)}>
            {disabled ? "Enable!" : "Disable!"}
          </button>
        </div>
        <div className="grid">
          <div>x: 1, y: 1</div>
          <div>x: 2, y: 1</div>
          <div>x: 3, y: 1</div>
          <div>x: 1, y: 2</div>
          <div>x: 2, y: 2</div>
          <div>x: 3, y: 2</div>
        </div>

        <div className="form">
          This is a form!
          <label>
            First field: <input type="text"></input>
          </label>
          <label>
            Second field <input type="number"></input>
          </label>
          <span>Which field is this?</span>
          {/* this container is only used for the last task */}
          <div className="checkbox-container">
            <label>
              2nd <input type="checkbox"></input>
            </label>
            <label>
              3rd <input type="checkbox"></input>
            </label>
            <label>
              4th <input type="checkbox"></input>
            </label>
          </div>
          <button>Submit!</button>
        </div>
      </section>
    </>
  );
};
