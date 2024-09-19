// Your given a code snippet that's part of a bigger app that deals with user image uploads.

// Since the native, built-in <input type="file"> element is hard to style and doesn't 
// fit the intended app style, it's hidden via display: none in the provided index.css file.

// Therefore, to make the file picker work without being displayed, your task is to ensure that the
// click event on the <input type="file"> element is triggered whenever the <button>Pick Image</button> is clicked.

// This can be achieved by calling the built-in click() method on the underlying input element.

// You should use React's "ref" feature to get hold of the <input type="file"> element and execute that
// click() method on it whenever the <button> is clicked.

import { useRef } from 'react';

function App() {
  const filePicker = useRef();

  function handleStartPickImage() {
    filePicker.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input data-testid="file-picker" type="file" accept="image/*" ref={filePicker} />
        <button onClick={handleStartPickImage}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
