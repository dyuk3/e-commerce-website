import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Products from './components/Products';
import Header from './components/Header';
import Home from './components/Home';
import ProductDesc from './components/ProductDesc';
import Cart from './components/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/:category',
          element: <Products />,
        },
        {
          path: '/products/:productId',
          element: <ProductDesc />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
