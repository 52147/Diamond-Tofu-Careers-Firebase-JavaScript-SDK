import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, off, query, orderByChild, equalTo } from "firebase/database";

export const TableComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, "testuser");
    let q = query(dbRef);

    if (searchQuery) {
      q = query(
        dbRef,
        orderByChild("last_name"),
        equalTo(searchQuery.toLowerCase().trim())
      );
    }

    const handleData = (snapshot) => {
      const items = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        console.log(childData); // Check if the expected data is being fetched
        items.push({ ...childData, id: childSnapshot.key });
      });
      console.log(items); // Check if the expected data is being stored in the array
      setData(items);
      setFilteredData(items);
    };

    const handleError = (error) => {
      console.error(error);
    };

    onValue(q, handleData, handleError);

    return () => {
      // Cleanup function to unsubscribe from Firebase queries
      off(q, handleData);
    };
  }, [searchQuery]);

  const handleSearch = (event) => {
    const query = event.target.value.trim().toLowerCase();
    setSearchQuery(query);
    const filtered = data.filter((item) =>
      item.last_name.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="jobdes">
        <div className="container">
          <div className="pt-3.5 text-center text-violet-700">
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

            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Education</th>
                    <th>Accomplishments</th>
                    <th>Visa Status</th>
                    <th>Resume Link</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.location}</td>
                      <td>{item.email}</td>
                      <td>{item.education}</td>
                      <td>{item.accomplish}</td>
                      <td>{item.visa}</td>
                      <td>{item.resume}</td>
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
