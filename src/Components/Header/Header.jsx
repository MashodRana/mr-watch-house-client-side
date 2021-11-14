import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const toogleButton = (evnt) => {
    let collapse = document.querySelector("#navbar-collapse");
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
  };

  const activeStyle = {
    backgroundColor: '#e5e7eb',
    color: 'black',
    padding: '2px 5px',
    borderRadius: '5px',
  }

  return (
    <>
      <nav class="bgc1 py-2 md:py-4">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div class="flex justify-between items-center">
            <NavLink to="/" class="font-bold text-xl tc2">
              <i class="far fa-clock"></i>&nbsp;
              MR WATCH HOUSE
            </NavLink>
            <button
              class="border border-solid border-gray-200 px-3 py-1 rounded text-gray-200 opacity-50 hover:opacity-75 md:hidden"
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
              className={isActive => isActive ? "p-2 lg:px-4 md:mx-2 text-black rounded bg-gray-200" : "p-2 lg:px-4 md:mx-2 text-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              className={isActive => isActive ? "p-2 lg:px-4 md:mx-2 text-black rounded bg-gray-200" : "p-2 lg:px-4 md:mx-2 text-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              className={isActive => isActive ? "p-2 lg:px-4 md:mx-2 text-black rounded bg-gray-200" : "p-2 lg:px-4 md:mx-2 text-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}
            >
              About
            </NavLink>
            {user.email && <NavLink
              to="/dashboard"
              className={isActive => isActive ? "p-2 lg:px-4 md:mx-2 text-black rounded bg-gray-200" : "p-2 lg:px-4 md:mx-2 text-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}
            >Dashboard</NavLink>}

            {user.email ? <>
              <p className="p-2 lg:px-4 md:mx-2 tc2 font-bold "><i class="far fa-user-circle"></i> {user.displayName}</p>
              <button
                className="p-2 lg:px-4 md:mx-2 text-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                onClick={logOut}
              >Logout <i class="fas fa-sign-out-alt"></i>
              </button>
            </> : <>
              <NavLink
                to="/login"
                className={isActive => isActive ? "p-2 lg:px-4 md:mx-2 text-black rounded bg-gray-200" : "p-2 lg:px-4 md:mx-2 text-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}
              >
                Login <i class="fas fa-sign-in-alt"></i>
              </NavLink>
              <NavLink
                to="/signup"
                className={isActive => isActive ? "p-2 lg:px-4 md:mx-2 text-black rounded bg-gray-200" : "p-2 lg:px-4 md:mx-2 text-gray-200 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}
              >
               <i class="fas fa-user-plus"></i> Signup
              </NavLink>
            </>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
