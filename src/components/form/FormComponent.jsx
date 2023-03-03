import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "diamond-tofu-career.firebaseapp.com",
  projectId: "diamond-tofu-career",
  storageBucket: "diamond-tofu-career.appspot.com",
  messagingSenderId: "657730990855",
  appId: "1:657730990855:web:2dc941d2e38b5320e30ba2",
  measurementId: "G-30Q73BL49S",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const FormComponent = () => {
  let [firstN, setUsername] = useState("");
  let [lastN, setlastname] = useState("");
  let [email, setEmail] = useState("");
  let [location, setLocation] = useState("");

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "resumes"));
    return querySnapshot.docs.map((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      return doc.data();
    });
  }

  async function writeNewPost(uid, username, picture, title, body) {
    // A post entry.
    // const postData = {
    //   firstN: "abc",
    //   lastN: "123",
    //   title: "", // PM | full-time ...
    //   email: "test@gmail.com",
    //   location: "LA",
    // };
    const postData = {
      firstN: firstN,
      lastN: lastN,
      title: "Intern SDE", // PM | full-time ...
      email: email,
      location: location,
    };
    console.log(firstN);

    try {
      const docRef = await addDoc(collection(db, "resumes"), postData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <section className="jobdes">
        <div className="container">
          <div className="px-9 pt-9 pb-9">
            <div className="text-center text-violet-700">
              <h1>Full-Time Software Engineer</h1>
            </div>
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                First Name
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={firstN}
                onChange={(event) => setUsername(event.target.value)}
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Last Name
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={lastN}
                onChange={(event) => setlastname(event.target.value)}
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Location
              </InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <div className="btnpadding btn-block ">
              <Button onClick={writeNewPost}>Apply</Button>
            </div>
            <div className="btnpadding btn-block ">
              <Button onClick={getPosts}>get post</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
