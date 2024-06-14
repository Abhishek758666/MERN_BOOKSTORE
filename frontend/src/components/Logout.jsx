import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const handleLogout = () => {
    localStorage.clear();
    const notify = () =>
      toast.success("Logged out sucessfully", { autoClose: 1000 });
    notify();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <>
      <ToastContainer />
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
