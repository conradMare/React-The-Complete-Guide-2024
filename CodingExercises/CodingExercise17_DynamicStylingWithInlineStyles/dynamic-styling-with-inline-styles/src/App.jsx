// Your task is to help out a colleague and style a h1 element dynamically (with inline styles) depending on which button was pressed.

// If the "Yes" button is pressed, the h1 element should receive color: "green" as an inline style.
// If the "No" button is pressed, color: "red" should be applied.

// Initially, when no button has been clicked yet, the color should be set to "white".

import { useState } from "react";

function App() {
  const [choice, setChoice] = useState(undefined);

  let textColor = 'white';

  if (choice === 'yes') {
    textColor = 'green';
  } else if (choice === 'no') {
    textColor = 'red';
  }

  return (
    <div id="app">
      <h1 style={{ color: textColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;