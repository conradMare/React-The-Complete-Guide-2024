import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';

const routerValue = createBrowserRouter([
  { path: '/', element: <HomePage /> },
])

function App() {
  return (
    <RouterProvider router={routerValue} />
  );
}

export default App;
