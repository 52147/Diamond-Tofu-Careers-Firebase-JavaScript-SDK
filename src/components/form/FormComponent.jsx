import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBU3h0sxwRtCttbizkG5lSMvw6For0Wd6A",
  authDomain: "diamond-tofu-career.firebaseapp.com",
  projectId: "diamond-tofu-career",
  storageBucket: "diamond-tofu-career.appspot.com",
  messagingSenderId: "657730990855",
  appId: "1:657730990855:web:2dc941d2e38b5320e30ba2",
  measurementId: "G-30Q73BL49S",
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export const FormComponent = () => {
  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "resumes"));
    return querySnapshot.docs.map((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      return doc.data();
    });
  }

  async function writeNewPost(
    uid,
    username,
    picture,
    title,
    body
  ) {
    // A post entry.
    const postData = {
      firstN: "abc",
      lastN: "123",
      title: "", // PM | full-time ...
      email: "test@gmail.com",
      location: "LA",
    };

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
        <div className="container padding-top">
          <div className="text-black text-center">
            <h1>Full-Time Software Engineer</h1>
          </div>
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">First Name</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <br />
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Last Name</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <br />
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <br />
          <br />
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">Location</InputGroup.Text>
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
      </section>
    </>
  );
};
