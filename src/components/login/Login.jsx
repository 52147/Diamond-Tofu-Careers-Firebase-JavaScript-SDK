import React, { useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { signInWithGooglePopup } from "../../database/firebase";

export const Login = () => {
  const [show, setShow] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const db = getFirestore();

  const handleModalClose = () => setShow(false);

  const handleGoogleLogin = async () => {
    const response = await signInWithGooglePopup();
    const email = response.user.email;

    const querySnapshot = await getDocs(collection(db, "access"));
    const documents = querySnapshot.docs;
    const matchingDocument = documents.find((doc) => doc.data().email === email);

    if (matchingDocument) {
      setAuthenticated(true);
    } else {
      setShow(true);
    }
  };

  const handleSubmit = async () => {
    // Handle regular form submission
  };

  if (authenticated) { // 如果 authenticated 為真，我們調用 navigate("/table") 重定向到表格頁面
    navigate("/table");
    return null; // Return null to avoid rendering the Login component once the user is authenticated
  }

  return (
    <>
      <div className="jobdes">
        <div className="container">
          <h1 className="font-medium text-center text-violet-700">
           Admin Login
          </h1>

          <div>
            <button className="buttonClass inputClass" onClick={handleGoogleLogin}>
              Login with Google
            </button>

            <Modal show={show} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Invalid Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>This email is not authorized to access this page.</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleModalClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
