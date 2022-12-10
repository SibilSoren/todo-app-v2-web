import React, { useState } from "react";
import { validateEmail } from "../global/Validation";
import TodoIcon from "../assets/check-list.png";
const Login = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  function handleClick(e) {
    e.preventDefault();
  }

  function handleEmailInput(e) {
    if (!validateEmail(e.target.value)) {
      setIsValidEmail(false);
    }
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-2 sm:px-4 lg:px-8 rounded-xl ">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="h-12" src={TodoIcon} alt="Your Company" />
            <h2 className="mt-6 text-left text-3xl font-bold tracking-tight text-gray-900">
              Login into <b>DOAST</b>
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
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
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
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
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={(e) => handleClick(e)}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  /> */}
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
