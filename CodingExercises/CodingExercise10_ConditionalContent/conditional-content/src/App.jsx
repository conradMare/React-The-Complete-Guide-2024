import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can not be reverted!</p>
        <button>Proceed</button>
      </div>
      <button>Delete</button>
    </div>
  );
}