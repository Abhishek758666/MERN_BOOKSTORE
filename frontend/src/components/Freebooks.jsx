import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { Instance } from "../../utils/Axios";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#516F95",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      next
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#516F95",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const Freebooks = () => {
  const [books, setbooks] = useState(null);

  const getBooks = async () => {
    try {
      const { data } = await Instance.get("/books");
      setbooks(data.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const freeBooks = books && books.filter((b, i) => b.category == "free");

  return (
    books && (
      <div className="min-h-[80vh] mt-10">
        <h1 className="p-10 text-3xl font-black text-secondary">Free Books</h1>
        <div className="slider-container px-10 pb-10">
          <Slider {...settings}>
            {freeBooks.map((book, i) => {
              return <Card key={i} book={book} />;
            })}
          </Slider>
        </div>
      </div>
    )
  );
};

export default Freebooks;
