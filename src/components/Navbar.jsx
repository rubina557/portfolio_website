import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          {/* TODO: Add a logo or name */}
        </NavLink>
        <div className="flex space-x-4">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/notebook">Notebook</NavLink>
          {/*Add other links as needed */}
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
