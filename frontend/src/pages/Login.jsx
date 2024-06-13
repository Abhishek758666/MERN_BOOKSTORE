import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userLogin, setuserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLogin);
    setuserLogin({
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full p-10 h-[70vh] flex justify-center items-center">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={userLogin.email}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={userLogin.password}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link to={"/signup"} className="label-text-alt link link-hover">
                Don't have an account?
                <span className="text-blue-400 underline">Sign up</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
