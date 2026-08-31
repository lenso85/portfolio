import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>
};

export default App;
