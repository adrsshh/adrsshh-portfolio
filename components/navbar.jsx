import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Connect from "./Connect";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="border-b-2 pb-5 flex justify-between items-center text-amber-50 font-serif m-5">
      <h1 className="hidden sm:flex ml-5 text-3xl font-extrabold  font-serif hover:animate-pulse cursor-pointer hover:bg-red-600 ...">
        adrsh😎
      </h1>
      <ul className="flex gap-4 sm:gap-5 max-w-fit justify-end font-serif text-lg sm:text-2xl mr-5">
        <li className=" hover:cursor-pointer hover:border-b-2 hover:border-amber-300 pb-1 transition  ">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:cursor-pointer hover:border-b-2 hover:border-amber-300 pb-1 transition">
          <Link to="/About" >About</Link>
        </li>
        <li className="hover:cursor-pointer hover:border-b-2 hover:border-amber-300 pb-1 transition">
          <Link to="/Skills">Skills</Link>
        </li>
        <li className="hover:cursor-pointer hover:border-b-2 hover:border-amber-300 pb-1 transition">
          <Link to="/Connect">Connect</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
