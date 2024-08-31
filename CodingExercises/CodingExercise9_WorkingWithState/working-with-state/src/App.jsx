// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import React from 'react';

export default function App() {
  const [price, setPrice] = React.useState(100);

  function handleClick() {
    setPrice(75);
  }

  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={handleClick}>Apply Discount</button>
    </div>
  );
}