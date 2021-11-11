import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const toogleButton = (evnt) => {
    let collapse = document.querySelector("#navbar-collapse");
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  };

  return (
    <>
      <nav class="bg-white py-2 md:py-4">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div class="flex justify-between items-center">
            <NavLink to="/" class="font-bold text-xl text-indigo-600">
              MR Watch House
            </NavLink>
            <button
              class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
              onClick={toogleButton}
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <div
            class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <NavLink
              to="/home"
              class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About
            </NavLink>

            {user.email ? <><p>{user.displayName}</p>
              <button onClick={logOut}>Logout</button>
            </> : <>
              <NavLink
                to="/login"
                class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Signup
              </NavLink>
            </>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
