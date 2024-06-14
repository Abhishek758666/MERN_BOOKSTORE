import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] p-10">
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
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
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              placeholder="message"
              className="input input-bordered h-32"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
