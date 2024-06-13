import React from "react";
import { useNavigate } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "../components/Cards";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-10 flex flex-col items-center">
        <h1 className="text-5xl font-semibold ">
          we are delighted to have you{" "}
          <span className="text-[#E406BF]">{"Here :)"} </span>{" "}
        </h1>
        <p className="md:text-center text-lg w-full font-medium m-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          voluptatum inventore ducimus vel optio consectetur laborum, cupiditate
          ipsum dolorum quaerat culpa explicabo unde ipsa hic fugiat? Hic
          architecto, nesciunt aliquam perspiciatis neque inventore. Repudiandae
          odio animi laudantium nam at et!
        </p>
        <button onClick={() => navigate(-1)} className="btn btn-secondary">
          Back
        </button>
      </div>
      <div className="flex gap-10 justify-center flex-wrap p-10">
        {list.map((book, i) => {
          return <Cards key={i} book={book} />;
        })}
      </div>
    </>
  );
};

export default Courses;
