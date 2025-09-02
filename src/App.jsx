import React from "react";
import "./App.css";
import Navbar from "../components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Connect from "../components/Connect";
import Skills from "../components/Skills";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <div>
        <Navbar />
        <Home />
      </div>
    ,
  },
  {
    path: "/About",
    element: 
      <div>
        <Navbar />
        <About />
      </div>
    ,
  },
  {
    path: "/Skills",
    element: 
      <div>
        <Navbar />
        <Skills />
      </div>
    ,
  },
  {
    path: "/Connect",
    element: 
      <div>
        <Navbar />
        <Connect />
      </div>
    ,
  },
]);

function App() {
  return (
    <div>
            <RouterProvider router={router}>
            <Navbar />
            </RouterProvider>
        </div>
  );
}

export default App;
