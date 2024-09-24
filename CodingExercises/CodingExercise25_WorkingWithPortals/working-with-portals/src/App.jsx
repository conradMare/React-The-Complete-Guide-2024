// A colleague asked you to finish work on a Toast component they worked on.

// That component should output a short info message upon certain page events - e.g., once a user successfully enrolled into a course.

// To optimize the final DOM structure, the rendered content of the Toast component should be injected directly into
// the <body> element (which could be selected via document.querySelector('body')).
// It should NOT be rendered in the place where the <Toast /> component is used in the JSX code!

// For this task, the edited Toast component should then be displayed conditionally once a user clicked the Enrol button in the App component.

// After 3 seconds (set via setTimeout), the Toast component should be removed from the page again.

import { useState } from 'react';

import Toast from './components/Toast';

function App() {
  const [toastVisible, setToastVisible] = useState(false);

  function handleEnrol() {
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  }

  return (
    <div id="app">
      {toastVisible && <Toast message="Enrolled successfully!" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
