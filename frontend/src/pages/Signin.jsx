import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [userSignin, setuserSignin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserSignin({ ...userSignin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userSignin);
    setuserSignin({
      name: "",
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
              <span className="label-text">Name</span>
            </label>
            <input
              onChange={handleChange}
              name="name"
              value={userSignin.name}
              type="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={userSignin.email}
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
              value={userSignin.password}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link to={"/login"} className="label-text-alt link link-hover">
                Already have an account?
                <span className="text-blue-400 underline">Login</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
