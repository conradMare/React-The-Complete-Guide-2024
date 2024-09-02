// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.
// The class should be applied when the <button> is clicked for the first time.

import { useState } from "react";

export default function App() {

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(isActive => !isActive);
  }

  return (
    <div>
      <p className={isActive ? "active" : undefined}>Change Color</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}