import React, { useState } from "react";
import { validateEmail } from "../global/Validation";
import { URL } from "../global/config";
import axios from "axios";
import Snackbar from "awesome-snackbar";
const SignUp = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  function handleClick(e) {
    e.preventDefault();
  }

  function handleEmailInput(e) {
    if (!validateEmail(e.target.value)) {
      setIsValidEmail(false);
    } else {
      handleEmail(e);
    }
  }
  function handleName(e) {
    setFullName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let jsonToSend = {
      email: email,
      password: password,
      fullName: fullName,
    };
    axios
      .post(`${URL.baseURL}createUser/`, { ...jsonToSend })
      .then((response) => {
        if (response.data.status === "-1") {
          new Snackbar("Error while creating user.", {
            position: "top-center",
            theme: "light",
            style: {
              container: [
                ["background-color", "red"],
                ["border-radius", "5px"],
              ],
              message: [["color", "#eee"]],
              bold: [["font-weight", "bold"]],
            },
          });
        } else {
          new Snackbar(`${response.data.status} This is the status`);
        }
        setLoading(false);
      });
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-2 sm:px-4 lg:px-8 rounded-xl ">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <img className="h-12" src={TodoIcon} alt="Your Company" /> */}
            <h2 className="mt-6 text-left text-3xl font-bold tracking-tight text-gray-900">
              Signup into <b>DOAST</b>
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm mb-5">
              <div>
                <span className="after:content-['*'] after:ml-0.5 text-left after:text-red-500 block text-sm font-medium text-slate-700">
                  Full Name
                </span>
                <input
                  //   value={fullName}
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="text"
                  required
                  className={`mt-1 px-3 py-2 mb-5 bg-white border shadow-sm border-slate-300 
                   placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 peer`}
                  placeholder="Full Name"
                  onBlur={handleName}
                />
              </div>
              <div>
                <span className="after:content-['*'] after:ml-0.5 text-left after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`mt-1 px-3 py-2 bg-white border shadow-sm ${
                    isValidEmail ? `border-slate-300 ` : `border-red-500`
                  } placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 peer`}
                  placeholder="Email address"
                  onChange={() => setIsValidEmail(true)}
                  onBlur={handleEmailInput}
                />
                {!isValidEmail ? (
                  <p className="mt-1 peer-invisible text-pink-600 text-sm text-left">
                    Please provide a valid email address.
                  </p>
                ) : null}
              </div>
              <div>
                <span className="after:content-['*'] after:ml-0.5 text-left after:text-red-500 block text-sm font-medium text-slate-700 mt-4">
                  Password
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Password"
                  onBlur={handlePassword}
                />
              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => handleSubmit(e)}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
