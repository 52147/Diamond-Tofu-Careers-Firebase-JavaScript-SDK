import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { updateData, useDbData, useDbUpdate } from "../../database/firebase";
import { getDatabase, ref, set, child, get } from "firebase/database";

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
  // const [testuser] = useDbUpdate(`/testuser/${email}`);

  // function writeNewPost(e){
  //   e.preventDefault();
  //   testuser({first_name: firstN, last_name: lastN, email: email, location: location});

  // }

  async function writeNewPost() {
    const db = getDatabase();
    try {
      await set(ref(db, `/testuser/${lastN}`), {
        first_name: firstN,
        last_name: lastN,
        email: email,
        location: location,
        education: education,
        accomplish: accomplish,
        visa: visa,
        resume: resume
      }).then(() => {
        console.log("Data saved successfully!");
        // Data saved successfully!
      });
    } catch (error) {
      console.log(error);
      // The write failed...
    }
  }

  async function getPosts() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/testuser/${lastN}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // const querySnapshot = await getDocs(collection(db, "resumes"));
    // return querySnapshot.docs.map((doc) => {
    //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //   return doc.data();
    // });
  }

  // async function writeNewPost(uid, username, picture, title, body) {
  //   // A post entry.
  //   // const postData = {
  //   //   firstN: "abc",
  //   //   lastN: "123",
  //   //   title: "", // PM | full-time ...
  //   //   email: "test@gmail.com",
  //   //   location: "LA",
  //   // };
  //   // let courseId = course.term[0] + course.number;
  //   const postData = {
  //     id:1,
  //     firstN: firstN,
  //     lastN: lastN,
  //     title: "Intern SDE", // PM | full-time ...
  //     email: email,
  //     location: location,
  //   };
  //   // updateData(`/courses/${courseId}/title`, meetingTitle);
  //   // updateData(`/courses/${courseId}/meets`, meetingTime);
  //   // updateData(`/resumes/BxxdSCySvWVsfj14gaC6/first_name`, firstN);
  //   // updateData(`/resumes/last_name`, lastN);
  //   // const doc = {'birthday': '1223'}
  //   // updateData("resumes/1",lastN);
  //   try {
  //     const docRef = await addDoc(collection(db, "resumes"), postData);

  //     // updateData(`resumes/1`,doc);
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  return (
    <>
      <section className="jobdes">
        <div className="container">
          <div className="px-9 pt-9 pb-9">
            <div className="text-center text-violet-700">
              <h1>Full-Time Software Engineer</h1>
            </div>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="First Name"
                value={firstN}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="email"
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
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="email"
                placeholder="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="email"
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
                type="email"
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
                type="email"
                placeholder="Visa"
                value={visa}
                onChange={(event) => setVisa(event.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Personal website/ LinkedIn</Form.Label>
              <Form.Control
                type="email"
                placeholder="Personal website/ LinkedIn"
                value={resume}
                onChange={(event) => setResume(event.target.value)}
              />
            </Form.Group>
            

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
