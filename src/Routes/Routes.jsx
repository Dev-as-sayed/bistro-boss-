import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import OurManue from "../Pages/OurManue/OurManue";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/ourManue",
          element: <OurManue></OurManue>
        }
      ]
    },
  ]);