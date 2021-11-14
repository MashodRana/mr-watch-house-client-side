import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, loginWithEmailPassword } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const destination = location?.state?.from?.pathname || '/';
  const handleOnChange = (evnt) => {
    const field = evnt.target.name;
    const value = evnt.target.value;
    let newUserInfo = { ...userInfo };
    newUserInfo[field] = value;
    setUserInfo(newUserInfo);
  }
  const handleLogin = (evnt) => {
    // console.log('inside handleLogin ', userInfo);
    loginWithEmailPassword(userInfo.email, userInfo.password)
    history.replace(destination);

    evnt.preventDefault();
  }
  return (
    <>
      <section class="text-gray-600 body-font">
        <form onSubmit={handleLogin}>

          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-2/6 md:w-1/2 bg-purple-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-auto">
              <h2 class="text-yellow-800 text-lg font-medium title-font mb-5">
                Login
              </h2>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleOnChange}
                  value={userInfo.email}
                  required
                />
              </div>
              <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="full-name"
                  name="password"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleOnChange}
                  value={userInfo.password}
                  required
                />
              </div>
              <button
                class="text-gray-200 bgc1 opacity-50 border-0 py-2 px-8 focus:outline-none hover:opacity-100 rounded text-lg"
                type="submit"
              >
                Login
              </button>
              <hr className="pt-0.5 my-2 bg-gray-400" />
              <button class="text-gray-200 bgc1 opacity-50 border-0 py-2 px-8 focus:outline-none hover:opacity-100 rounded text-lg">
                Google Login
              </button>
              <p class="text-normal text-gray-500 mt-3">
                If you are new here, Please{" "}
                <Link to="/signup" className="text-yellow-800">
                  Sign Up
                </Link>{" "}
                first.
              </p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
