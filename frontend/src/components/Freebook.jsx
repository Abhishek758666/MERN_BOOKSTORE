import React from "react";
import list from "../../public/list.json";
import Slider from "react-slick";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Freebook = () => {
  const freebooks = list.filter((data) => data.category == "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-5">
      <h1 className="text-3xl font-semibold">Free offered courses</h1>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ipsum
        odio, qui sunt aspernatur quod culpa totam dolor iste possimus quaerat
        sed ut tempore libero quibusdam aut animi optio rerum?
      </p>
      <div className="w-full h-max p-10">
        <Slider {...settings}>
          {freebooks.map((book, i) => {
            return <Cards key={i} book={book} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Freebook;
