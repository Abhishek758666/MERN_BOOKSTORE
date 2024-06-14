import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Instance } from "../../utils/Axios";

const Login = () => {
  const navigate = useNavigate();

  const [userLogin, setuserLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Instance.post("/user/login", {
        email: userLogin.email,
        password: userLogin.password,
      });
      localStorage.setItem("User", JSON.stringify(data.user));
      const notify = () =>
        toast.success("Logged in sucessfully", { autoClose: 1000 });
      notify();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error while logged in", { autoClose: 1000 });
      notify();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserLogin({ ...userLogin, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-[80vh] p-10">
      <ToastContainer />
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={userLogin.email}
              onChange={handleChange}
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
              value={userLogin.password}
              onChange={handleChange}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link to="/signup" className="label-text-alt">
                Don't have an account{" "}
                <span className="text-blue-800 link link-hover">Sign Up</span>
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
