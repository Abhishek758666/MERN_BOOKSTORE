import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Instance } from "../../utils/Axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [userSignup, setuserSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Instance.post("/user/signup", {
      name: userSignup.name,
      email: userSignup.email,
      password: userSignup.password,
    });
    const notify = () =>
      toast.success("signup sucessfully", { autoClose: 1000 });
    notify();
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserSignup({ ...userSignup, [name]: value });
  };

  return (
    <>
      <div className="flex justify-center items-center h-[80vh] p-10">
        <ToastContainer />
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                value={userSignup.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                value={userSignup.email}
                onChange={handleChange}
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
                name="password"
                value={userSignup.password}
                onChange={handleChange}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="label-text-alt">
                  Already have an account{" "}
                  <span className="text-blue-800 link link-hover">Login</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
