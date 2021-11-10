import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div class="flex justify-center items-center h-screen w-full bg-blue-400">
        <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Register
          </h1>
          <form action="/" method="post">
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="first_name"
              >
                Name
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            
            <div class="flex flex-col mb-4">
              <label class="mb-2 font-bold text-lg text-gray-900" for="email">
                Email
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Password
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button
              class="block bg-blue-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <Link
            class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
            to="/login"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
