import './App.css';
import Home from './pages/home/Home'
import Header from './components/header/Header';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './pages/checkout/Checkout';

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
      element:
        <>
          <Header />
          <Checkout />
        </>,
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
