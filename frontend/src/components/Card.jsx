import React from "react";

const Card = ({ book }) => {
  return (
    <div className="mx-5">
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src="/book.png" alt="Shoes" className=" w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book.title}
            <div className="badge badge-secondary">{book.category}</div>
          </h2>
          <p>
            {book.description.slice(0, 50)}...{" "}
            <span className="text-secondary"> more</span>
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{book.price}$</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
