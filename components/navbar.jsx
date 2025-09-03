import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className=" pb-5 flex justify-center items-center text-amber-50 font-serif m-5">
      <ul className="flex gap-4 sm:gap-5 max-w-fit justify-end font-serif text-lg sm:text-2xl mr-5">
        <li className="font-serif bg-linear-150 rounded-4xl p-2 shadow-2xl shadow-amber-700 border-amber-200 border-2 px-5 py-2.5 pb-2 hover:cursor-pointer hover:transition hover:ring-2 ring-amber-300 ...  ">
          <Link to="/">Home</Link>
        </li>
        <li className="font-serif bg-linear-150 rounded-4xl p-2 shadow-2xl shadow-amber-300 border-amber-200 border-2 px-5 py-2.5 pb-2  hover:cursor-pointer transition hover:ring-2 ring-amber-300 ...  ">
          <Link to="/About" >About</Link>
        </li>
        <li className="font-serif bg-linear-150 rounded-4xl p-2 shadow-2xl shadow-amber-300 border-amber-200 border-2 px-5 py-2.5 pb-2  hover:cursor-pointer transition hover:ring-2 ring-amber-300 hover:bg-amber-200 ...  ">
          <Link to="/Skills">Skills</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
