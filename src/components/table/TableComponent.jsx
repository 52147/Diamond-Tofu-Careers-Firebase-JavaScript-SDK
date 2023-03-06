import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export const TableComponent = () => {
  const [data, setData] = useState([]);

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
        setData(items);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  return (
    <>
      <div className="jobdes">
        <div className="container">
          <div className="pt-3.5	 ">
            <div className="text-center text-violet-700">
              <h1>Form Data Table</h1>
            </div>
            <br />
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.email}</td>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.location}</td>
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
