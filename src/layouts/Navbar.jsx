import React, { useEffect, useState } from "react";  // Corrected import statement
import { Link, useLocation } from "react-router-dom";
import Navlogo from '../images/Xponent.jpg';

const Navbar = () => {
  // Navigation items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  // Get the current route
  const location = useLocation();

  return (
    <div>
      <nav className=" p-4 absolute w-screen z-1 flex justify-between">

        <img src={Navlogo} alt="Logo" className="object-cover object-center h-10 rounded-full" />

        <ul className="flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`text-white px-3 py-2 transition ${location.pathname === item.path
                    ? "border-b-4 border-violet-500 font-bold"
                    : "hover:border-b-4 border-white"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
