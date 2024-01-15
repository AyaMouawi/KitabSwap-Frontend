import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("token"); 
    if(userLoggedIn){setLoggedIn(true)}
  }, []);

  return (
    <div className="App">
      <nav className="bg-white border-gray-200 navbar-container font-lateef font-light shadow-2xl relative z-10">
        <div className="flex flex-wrap items-center justify-between p-2">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="../Images/Icons/logo.png" className="w-44 lg:w-56 md:w-56 sm:w-8"  />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex lg:w-56 md:w-56 sm:w-8 w-32   ">
            <div className="flex items-center">
              <Link to="/Cart">
                <img src="../Images/Icons/shoppingcart.png" className="h-7"  />
              </Link>
              {isLoggedIn ? (
              <Link to="/UserDash" className="ml-4">
                <img src="../Images/Icons/dashboard.png" className="h-7"  />
              </Link>):(<></>)}
            </div>
            <div className=" flex items-center ml-4 lg:ml-auto ">
              {isLoggedIn ?(
                 <img src="../Images/Icons/logout.png" className="h-7" alt="Flowbite Logo" />
               ):(
                <Link to="/SignUp">
                <img src="../Images/Icons/user.png" className="h-7" alt="Flowbite Logo" />
              </Link>
              )}
            </div>
            </div>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 white:text-gray-400 white:hover:bg-gray-700 white:focus:ring-gray-600 "
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`md:flex items-center w-full md:w-auto md:order-1 ${
              isMenuOpen ? " justify-end block fixed top-16 right-0 left-0 z-50 flex bg-transparent" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white white:bg-gray-800 md:white:bg-gray-900 white:border-gray-700 navbar-list ${
              isMenuOpen ? "md:ml-auto" : ""
            } sm:flex-col sm:items-end`}>
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 md:p-0 rounded ${
                    isCurrentPage("/") ? "text-white underline" : "text-white"
                  } md:hover:bg-transparent md:hover:underline text-2xl white:text-white white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent white:border-gray-700`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className={`block py-2 px-3 md:p-0 rounded ${
                    isCurrentPage("/Shop") ? "text-white underline" : "text-white"
                  } md:hover:bg-transparent md:hover:underline text-2xl white:text-white white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent white:border-gray-700 `}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/Trade"
                  className={`block py-2 px-3 md:p-0 rounded ${
                    isCurrentPage("/Trade") ? "text-white underline" : "text-white"
                  } md:hover:bg-transparent md:hover:underline text-2xl white:text-white white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent white:border-gray-700`}
                >
                  Trade
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactUs"
                  className={`block py-2 px-3 md:p-0 rounded ${
                    isCurrentPage("/ContactUs") ? "text-white underline" : "text-white"
                  } md:hover:bg-transparent md:hover:underline text-2xl white:text-white white:hover:bg-gray-700 white:hover:text-white md:white:hover:bg-transparent white:border-gray-700 `}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;