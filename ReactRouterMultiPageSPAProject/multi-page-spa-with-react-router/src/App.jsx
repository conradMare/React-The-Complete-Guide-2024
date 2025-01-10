import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import ProductDetailPage from './pages/ProductDetail';

const routerValue = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: '' -> instead of index: true
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> }
    ],
  },
])

function App() {
  return (
    <RouterProvider router={routerValue} />
  );
}

export default App;
