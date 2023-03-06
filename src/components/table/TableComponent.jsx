import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export const TableComponent = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "testuser");

    onValue(
      dbRef,
      (snapshot) => {
        const items = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          console.log(childData); // Check if the expected data is being fetched
          items.push(childData);
        });
        console.log(items); // Check if the expected data is being stored in the array
        console.log(items.email);
        setData(items);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  const handleSearch = (event) => {
    const lname = event.target.value;
    const db = getDatabase();

    return onValue(
      ref(db, `/testuser/${lname}`),
      (snapshot) => {
        console.log(lname);
        const username =
          (snapshot.val() && snapshot.val()) || "Anonymous";
        // ...
        setFilteredData(username);
      },
      {
        onlyOnce: true,
      }
    );
  };

  return (
    <>
      <div className="jobdes">
        <div className="container">
          <div className="pt-3.5	 ">
            <div className="text-center text-violet-700">
              <h1>Form Data Table</h1>
            </div>

            <br />
            <div className="mb-3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Last Name"
                  onChange={handleSearch}
                />
              </div>
              <div><h1>First Name: {filteredData.first_name}</h1></div>
              <div><h1>Last Name: {filteredData.last_name}</h1></div>
              <div><h1>Location: {filteredData.location}</h1></div>
              <div><h1>Email: {filteredData.email}</h1></div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.location}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
