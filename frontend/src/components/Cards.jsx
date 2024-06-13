import React from "react";

const Cards = ({ book }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={book.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book.name}
            <div className="badge badge-primary">{book.category}</div>
          </h2>
          <p>{book.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{book.price}$</div>
            <div className=" hover:bg-[#F100B7] duration-300 border-2 hover:border-[#f100b7] hover:text-white px-3 py-2 rounded-full">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
