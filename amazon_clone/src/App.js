import './App.css';
import Home from './pages/home/Home'
import Header from './components/header/Header';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Checkout from './pages/checkout/Checkout';
import Login from './pages/login/Login';
import { useEffect } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh', user)
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    });
    return () => unsubscribe();
  }, [])

  console.log(user)

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
      element: <Login />,
    },
    {
      path: "/checkout",
      element:
        <>
          <Header />
          <Checkout />
        </>,
    }
  ]);


  return (

    <RouterProvider router={router} />
  );
}



export default App;
