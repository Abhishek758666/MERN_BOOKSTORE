import React from "react";

import list from "./../../public/list.json";
import Freebook from "../components/Freebook";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="left px-5 pt-20 w-full md:w-[50%] leading-none tracking-tighter order-2 md:order-1">
          <h1 className="text-5xl font-semibold">
            Hello, welcome here to learn something{" "}
            <span className="text-[#E406BF]">new everyday!!!</span>{" "}
          </h1>
          <p className="text-xl font-medium my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            dolore. Animi neque nam fugit recusandae aliquam culpa, doloremque
            optio consectetur!
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Enter email to login"
            />
          </label>
          <button className="btn btn-secondary mt-10">Login</button>
        </div>
        <div className="right p-5 md:p-0 md:w-[50%] order-1">
          <img src="/bg.jpg" className="w-full md:h-[70vh] object-contain" />
        </div>
      </div>

      <Freebook />
    </>
  );
};

export default Home;
