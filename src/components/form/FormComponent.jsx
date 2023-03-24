import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Modal } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
  db,
  updateData,
  useDbData,
  useDbUpdate,
} from "../../database/firebase";
import emailjs from '@emailjs/browser';

// import { getFirestore, getDatabase, ref, set, child, get } from "firebase/database";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: "diamond-tofu-career.firebaseapp.com",
//   projectId: "diamond-tofu-career",
//   storageBucket: "diamond-tofu-career.appspot.com",
//   messagingSenderId: "657730990855",
//   appId: "1:657730990855:web:2dc941d2e38b5320e30ba2",
//   measurementId: "G-30Q73BL49S",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

export const FormComponent = () => {
  let [firstN, setUsername] = useState("");
  let [lastN, setlastname] = useState("");
  let [email, setEmail] = useState("");
  let [location, setLocation] = useState("");
  let [education, setEducation] = useState("");
  let [accomplish, setAccomplish] = useState("");
  let [visa, setVisa] = useState("");
  let [resume, setResume] = useState("");

  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const form = useRef();
  // const [testuser] = useDbUpdate(`/testuser/${email}`);

  // function writeNewPost(e){
  //   e.preventDefault();
  //   testuser({first_name: firstN, last_name: lastN, email: email, location: location});

  // }

  // async function writeNewPost() {
  //   const db = getDatabase();
  //   try {
  //     await set(ref(db, `/testuser/${lastN}`), {
  //       first_name: firstN,
  //       last_name: lastN,
  //       email: email,
  //       location: location,
  //       education: education,
  //       accomplish: accomplish,
  //       visa: visa,
  //       resume: resume
  //     }).then(() => {
  //       console.log("Data saved successfully!");
  //       setShow(true);
  //       // Data saved successfully!
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     // The write failed...
  //   }
  // }

  async function getPosts() {
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `/testuser/${lastN}`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const querySnapshot = await getDocs(collection(db, "resumes"));
    return querySnapshot.docs.map((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);

      return doc.data();
    });
  }

  async function writeNewPost(e) {
    emailjs.sendForm('service_m6td8xi', 'template_q7m09ga', form.current, '34k_iE5a6LQj_hmU8')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    // const apiKey = 'key-da9765c5ee13364f7d538df08a15ff11';
    // const domain = 'diamondtofucareer.com';
    // const url = `https://api.mailgun.net/v3/${domain}/form`;

    // const formData = new FormData();
    // const from = "debra4117@gmail.com";
    // const to = "debra4117@gmail.com";
    // const subject = "123";
    // const text = "456";
    // formData.append('from', from);
    // formData.append('to', to);
    // formData.append('subject', subject);
    // formData.append('text', text);

    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': 'Basic ' + btoa('api:YOUR_API_KEY'),
    //     "Content-Type": "multipart/form-data",
    //     'Referrer-Policy': 'strict-origin-when-cross-origin'
    //   },
    //   body: formData,
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     alert('Email sent successfully!');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     alert('Failed to send email.');
    //   });

    // A post entry.
    // const postData = {
    //   firstN: "abc",
    //   lastN: "123",
    //   title: "", // PM | full-time ...
    //   email: "test@gmail.com",
    //   location: "LA",
    // };
    // let courseId = course.term[0] + course.number;
    const postData = {
      id: 1,
      firstN: firstN,
      lastN: lastN,
      title: "Intern SDE", // PM | full-time ...
      email: email,
      location: location,
    };

    try {
      const docRef = await addDoc(collection(db, "resumes"), postData);

      // updateData(`resumes/1`,doc);
      setShow(true);

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
            <form action="" ref={form} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstN}
                name="user_name" 
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastN}
                onChange={(event) => setlastname(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                name="user_email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Education"
                value={education}
                onChange={(event) => setEducation(event.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Top 3 accomplishments at work/school.</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="accomplishments"
                value={accomplish}
                onChange={(event) => setAccomplish(event.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> Visa Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Visa"
                value={visa}
                onChange={(event) => setVisa(event.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Personal website/ LinkedIn 123</Form.Label>
              <Form.Control
                type="text"
                placeholder="Personal website/ LinkedIn"
                value={resume}
                onChange={(event) => setResume(event.target.value)}
              />
            </Form.Group>
            </form>
            <br />
            <div className="btnpadding btn-block ">
              <Button onClick={writeNewPost}>Apply</Button>
            </div>
            <div className="btnpadding btn-block ">
              <Button onClick={getPosts}>get post</Button>
            </div>
          </div>
        </div>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Apply Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            Thank you {lastN} for applying this application.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};
