import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart";
import Wishlist from "../../pages/Wishlist";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>      
      <div
        className={`navbar transition-all duration-300 ${
          activeLink === "home" ? "z-10" : "bg-transparent relative z-20"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  to="/"
                  className={`p-2 ${
                    activeLink === "home" ? "text-[#A95FE7]" : "text-black"
                  }`}
                  onClick={() => handleNavClick("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/statistics"
                  className={`p-2 ${
                    activeLink === "statistics" ? "text-[#A95FE7]" : "text-black"
                  }`}
                  onClick={() => handleNavClick("statistics")}
                >
                  Statistics
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={`p-2 ${
                    activeLink === "dashboard" ? "text-[#A95FE7]" : "text-black"
                  }`}
                  onClick={() => handleNavClick("dashboard")}
                >
                  Dashboard
                </Link>
              </li>
              <li>
              <Link to={'/purchasedtails'}> Purchase Details </Link>
              </li>
            </ul>
          </div>
          <p className="text-2xl font-bold">
            <Link to="/">Gadget Heaven</Link>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-xl font-bold">
            <li>
              <Link
                to="/"
                className={`px-4 py-2 rounded ${
                  activeLink === "home" ? "text-[#A95FE7]" : "text-black"
                }`}
                onClick={() => handleNavClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/statistics"
                className={`px-4 py-2 rounded ${
                  activeLink === "statistics" ? "text-[#A95FE7]" : "text-black"
                }`}
                onClick={() => handleNavClick("statistics")}
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`px-4 py-2 rounded ${
                  activeLink === "dashboard" ? "text-[#A95FE7]" : "text-black"
                }`}
                onClick={() => handleNavClick("dashboard")}
              >
                Dashboard
              </Link>

              </li>
              <li>
              <Link to={'/purchasedtails'}> Purchase Details </Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link to="/dashboard">
            <Cart   />
          </Link>
          <Link to="/dashboard">
            <Wishlist />
          </Link>
        </div>
      </div>

      {/* Change background position when "home" is active */}
      <div className={`${activeLink === "home" ? "bg-[#9538E2]" : ""}`}>
        {/* Add your banner content or other sections here */}
      </div>
    </div>
  );
};

export default NavBar;
