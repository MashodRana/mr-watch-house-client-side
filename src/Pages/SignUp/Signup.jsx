import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Signup.css";

const Signup = () => {
  const [signupData, setSignupData] = useState({});
  const { signUpWithEmailPassword } = useAuth();
  // const location = useLocation();
  const history = useHistory();

  const handleOnChange = evnt => {
    const field = evnt.target.name;
    const value = evnt.target.value;
    const newData = { ...signupData };
    newData[field] = value;
    setSignupData(newData);
  }

  const handleSignupSubmit = evnt => {
    console.log(signupData);
    signUpWithEmailPassword(signupData.name, signupData.email, signupData.password);
    history.push('/');
    evnt.preventDefault();
  }


  return (
    <>
    <main>
    <section class="text-gray-600 body-font">
        <form onSubmit={handleSignupSubmit}>

          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-2/6 md:w-1/2 bg-purple-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 mx-auto">
              <h2 class="text-yellow-800 text-lg font-medium title-font mb-5">
               Create a New Account
              </h2>
              <div class="relative mb-4">
                <label for="name" class="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleOnChange}
                  value={signupData.name}
                  required
                />
              </div>
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
                  value={signupData.email}
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
                  value={signupData.password}
                  required
                />
              </div>
              <button
                class="text-gray-200 bgc1 opacity-50 border-0 py-2 px-8 focus:outline-none hover:opacity-100 rounded text-lg"
                type="submit"
              >
                Create Account
              </button>
              <hr className="pt-0.5 my-2 bg-gray-400" />
              <button class="text-gray-200 bgc1 opacity-50 border-0 py-2 px-8 focus:outline-none hover:opacity-100 rounded text-lg">
                Google Login
              </button>
              <p class="text-normal text-gray-500 mt-3">
                Already have an account?, Please{" "}
                <Link to="/login" className="text-yellow-800">
                  Login
                </Link>{" "}
                here.
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
    </>
  );
};

export default Signup;
