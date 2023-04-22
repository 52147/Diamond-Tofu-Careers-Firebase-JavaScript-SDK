import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
export const TableRow = ({ item }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("Dictamen");
  const handleChange = (e) => {
    handleStatus(item.id, e.target.value);
    setType(e.target.value);
    console.log(e.target.value);
  };
  function handleStatus(itemId, status) {
    const db = getFirestore();
    const resumeDoc = doc(db, "resumes", itemId);
    try {
      updateDoc(resumeDoc, { status });
      const newData = data.map((item) => {
        if (item.id === itemId) {
          return { ...item, status };
        } else {
          return item;
        }
      });
      setData(newData);
      const filtered = newData.filter((item) =>
        item.last_name.toLowerCase().includes(searchQuery)
      );
      setFilteredData(filtered);
    } catch (error) {
      console.error(error);
    }
  }
  const sendEmail = () => {
    // Replace with your own service ID and template ID
    const serviceId = "service_m6td8xi";
    const templateId = "template_q7m09ga";

    // Replace with your own template parameter values
    const templateParams = {
      user_email: item.email,
      user_name: item.first_name + " " + item.last_name,
      message: "Your application be reviewed.",
      // Add any other template parameters needed for the email
    };
    emailjs
      .send(serviceId, templateId, templateParams, "34k_iE5a6LQj_hmU8")
      .then((result) => {
        console.log(result.text);
        alert("Application reviewed email sent successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Error sending application reviewed email.");
      });
  };

  return (
    <tr key={item.id}>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.location}</td>
      <td>
        <a href={`mailto:${item.email}`}>{item.email}</a>
      </td>
      <td>{item.education}</td>
      <td>{item.accomplish}</td>
      <td>{item.visa}</td>
      <td>{item.link}</td>
      <td>{item.resume}</td>
      <td>
        <Form.Select
          size="sm"
          className="mx-2"
          value={type}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Rejected">Rejected</option>
          <option value="Approved">Approved</option>
        </Form.Select>
      </td>
      <td>
        <Button variant="primary" size="sm" onClick={sendEmail}>
          Review
        </Button>
      </td>
    </tr>
  );
};
