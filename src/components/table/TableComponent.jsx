import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { TableRow } from "./TableRow";

export const TableComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("Dictamen");

  useEffect(() => {
    const db = getFirestore();
    const dbCollection = collection(db, "resumes");
    let q = query(dbCollection);

    if (searchQuery) {
      q = query(
        dbCollection,
        where("last_name", "==", searchQuery.toLowerCase().trim())
      );
    }

    const handleData = (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        const docData = doc.data();
        console.log(docData); // Check if the expected data is being fetched
        items.push({ ...docData, id: doc.id, status: "Pending" });
      });
      console.log(items); // Check if the expected data is being stored in the array
      setData(items);
      setFilteredData(items);
    };
    // const handleStatus = () =>{}
    // function handleStatus(id, status) {
    //   // your code here
    // }

    const handleError = (error) => {
      console.error(error);
    };

    const unsubscribe = onSnapshot(q, handleData, handleError);

    return () => {
      // Cleanup function to unsubscribe from Firestore queries
      unsubscribe();
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
      <div className="container">
        <div className="pt-3.5 text-center text-violet-700">
          <h1>Form Data Table</h1>
        </div>
        <div className="search-box mb-3">
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
                <th>Website Link</th>
                <th>Resume Link</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <TableRow key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
