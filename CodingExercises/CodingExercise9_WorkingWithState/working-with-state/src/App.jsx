// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

export default function App() {
  return (
    <div>
      <p data-testid="price">$100</p>
      <button>Apply Discount</button>
    </div>
  );
}
