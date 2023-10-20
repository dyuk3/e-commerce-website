import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
  ]);

  return (
    <div>
      <Home />
      <Login />
    </div>
  );
}

export default App;
