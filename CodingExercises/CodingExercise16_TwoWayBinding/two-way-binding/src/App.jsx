// Your task is to collect the values entered into the two input controls (<textarea> and <input>) via two-way binding.

// In addition, you should pass the collected values via the appropriate props to the already existing Review component.

import { useState } from 'react';
import Review from './components/Review';

export default function App() {
  const [studentName, setStudentName] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleChangeName(event) {
    setStudentName(event.target.value);
  }

  function handleChangeFeedback(event) {
    setFeedback(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleChangeFeedback} value={feedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleChangeName} value={studentName} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={studentName} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}