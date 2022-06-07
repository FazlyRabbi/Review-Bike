import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItem = ["home", "reviews", "dashboard", "blogs", "about"];
  return (
    <nav className="flex justify-center space-x-4 mb-9">
      {navItem.map((item, index) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `bg-red-500 text-white font-bold rounded-lg active:text-white uppercase mt-6 border-b-[1px] px-3 py-2`
              : `font-bold  px-3 py-2 text-slate-700 rounded-lg active:text-white uppercase mt-6 border-b-[1px] `
          }
          to={item === "home" ? `/` : `/${item}`}
          key={index}
        >
          {item}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
