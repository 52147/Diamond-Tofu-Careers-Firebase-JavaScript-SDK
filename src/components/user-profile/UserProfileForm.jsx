import React, { useState } from "react";

export const UserProfileForm = ({ user, updateUser }) => {
  const [resume, setResume] = useState(user.resume);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({ email, phone, address, resume});
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">


      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-lg font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="form-control mt-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone" className="text-lg font-bold">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          className="form-control mt-2"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address" className="text-lg font-bold">
          Address:
        </label>
        <input
          type="text"
          id="address"
          className="form-control mt-2"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-lg font-bold">
          Resume Link:
        </label>
        <input
          type="email"
          id="email"
          className="form-control mt-2"
          value={resume}
          onChange={(event) => setResume(event.target.value)}
        />
      </div>
      <button className="btn btn-primary btn-block mt-4">Save</button>
    </form>
  );
};
