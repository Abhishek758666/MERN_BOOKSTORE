import React, { useState } from "react";

const Contact = () => {
  const [contact, setcontact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcontact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    setcontact({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full p-10 min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold py-5">Contact</h1>
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              onChange={handleChange}
              name="name"
              value={contact.name}
              type="name"
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
              onChange={handleChange}
              name="email"
              value={contact.email}
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
              onChange={handleChange}
              name="message"
              value={contact.message}
              type="message"
              placeholder="message"
              className="input input-bordered min-h-24"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary">Contact</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
