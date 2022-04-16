import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../store/action/userAction";
const Signup = ({ registerUser, users }) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordConfirm, setPassWordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUserNameError] = useState(false);

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        setUserNameError(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const handleSignup = (e) => {
    if (password === passwordConfirm) {
      let newUser = {
        username,
        password,
      };
      registerUser(newUser);
      navigate("/tarabol-app-front-end-web/login");
    } else {
      setPasswordError(true);
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-20 w-auto"
          src="https://www.tarabol.space/logo.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={(e) => handleSignup(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={username}
                  onFocus={() => setUserNameError(false)}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    if (usernameError || passwordError) {
                      setPassWord("");
                      setPassWordConfirm("");
                    }
                  }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {usernameError && (
                <p className="text-[red] text-[12px] absolute">
                  username already exists
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassWord(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="current-confirmpassword"
                  value={passwordConfirm}
                  onChange={(e) => setPassWordConfirm(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {passwordError && (
                <p className="text-[red] text-[12px] absolute">
                  The password confirmation does not match
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p>
                  You have account?
                  <Link to="/tarabol-app-front-end-web/login">
                    <span className="text-[#f05123]"> Log in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
