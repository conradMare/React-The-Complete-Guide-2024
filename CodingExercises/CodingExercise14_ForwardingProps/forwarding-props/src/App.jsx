// Your task is to work on the Input component such that it either returns a <textarea> element or an <input> element,
// depending on whether a richText prop set on Input is true or false.

// I.e., if used like this:

// <Input richText />
// the Input component should render a <textarea>. Otherwise, it should render an <input>.

// In addition, the Input component should forward all other props directly to the returned <textarea> or <input> elements.

import Input from "./components/Input";

function App() {
  return (
    <div id="content">
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}

export default App;