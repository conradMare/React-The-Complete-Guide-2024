// Your working on a part of an application that contains a form which should be resettable from outside that form.

// A colleague prepared a Form component that contains a couple of dummy inputs and a "Save" button that's not doing anything.

// Your task is to expose a clear() function from inside that Form component so that other components that use the Form component
// can call that function to reset the form.

// Because that exposed clear() function should call the form's built-in reset() method
// (the JS form object, which is the underlying object of the <form> element, has a reset() method that does exactly what its name implies).

import { useRef } from 'react';

import Form from './components/Form';

export default function App() {
  const form = useRef();

  function handleRestart() {
    form.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}
