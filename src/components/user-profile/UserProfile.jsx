import React, { useState } from "react";
import { JobApplicationStatus } from "./JobApplicationStatus";
import { UserProfileForm } from "./UserProfileForm";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown USA",
    resume: "123"
  });

  const updateUser = (newUser) => {
    setUser({ ...user, ...newUser });
  };

  return (
    <div className="container mt-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h2 className="mb-0">{user.name}</h2>
          <p className="text-muted">{user.email}</p>
        </div>
      </div>
      <div className="card mt-4 ">
        <div className="card-body">
          <h3 className="card-title">Personal Information</h3>
          <ul className="list-unstyled">
            <li>
              <strong>Email: </strong>
              {user.email}
            </li>
            <li>
              <strong>Phone: </strong>
              {user.phone}
            </li>
            <li>
              <strong>Address: </strong>
              {user.address}
            </li>
          </ul>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Job Application Statuses</h3>
          <JobApplicationStatus title="Software Engineer" status="Applied" />
          <JobApplicationStatus title="Product Manager" status="Interviewing" />
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">Settings</h3>
          <UserProfileForm user={user} updateUser={updateUser} />
        </div>
      </div>
    </div>
  );
};

