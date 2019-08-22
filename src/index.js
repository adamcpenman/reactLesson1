import React, { useState } from "react";
import ReactDOM from "react-dom";

function Heading() {
  const message = "Hello World";
  return <h1>{message}</h1>;
}

function App() {
  // const countState = useState(40);
  // const count = countState[0];
  // const updateCount = countState[1];
  // *** SAME AS BELOW

  const [count, updateCount] = useState(40);
  // return value === [currentValue, functionToChangeValue]

  return (
    <div>
      <Heading />

      <h4>Current count: {count}</h4>
      <button onClick={() => updateCount(count + 1)}>Increment</button>
      <button onClick={() => updateCount(count - 1)}>Decrement</button>
      <button onClick={() => updateCount(40)}>Reset</button>

      {count === 42 && (
        <p>
          You have found the answer to the ultimate question of life, the
          universe, and everything.
        </p>
      )}
    </div>
  );
}

const container = document.getElementById("root");
ReactDOM.render(<App />, container);
