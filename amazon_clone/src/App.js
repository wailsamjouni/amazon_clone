import './App.css';
import Home from './pages/home/Home'
import Header from './components/header/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <>
          <Header />
          <Home />
        </>,
    },
    {
      path: "/login",
      element: <div>Login</div>,
    },
    {
      path: "/checkout",
      element: <div>Checkout</div>,
    },
  ]);


  return (
    // <div className="App">
    //   <h1>build amazon clone</h1>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
