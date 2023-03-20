import React, { useState } from "react";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button, Modal } from "react-bootstrap";
import { signInWithGooglePopup } from "../../database/firebase";
import { useReducer } from "react";
import { reducer } from "../../reducer/loginReducer";

export const Login = () => {
  const [state, dispatch] = useReducer(reducer);

  function handleButtonClick() {}

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  const [login, setLoginData] = useState(false);

  const db = getDatabase();
  const navigate = useNavigate();

  // const GoogleLogin = () => {

  //   const logGoogleUser = async () => {
  //     const response = await signInWithGooglePopup();
  //     console.log(response);
  //   };
  // }
  const GoogleLogin = async () => {
    try {
      const response = await signInWithGooglePopup();

      dispatch({ googleAuthData: response, type: "setData" });
      console.log(state.googleAuthData);
    } catch (error) {
      console.log("login failed");
    }
  };

  const submitUser = async () => {
    console.log(username);
    console.log(password);

    onValue(
      ref(db, `/auth/${username}`),
      (snapshot) => {
        console.log("hi");
        const account =
          (snapshot.val() && snapshot.val().account) || "Anonymous";
        //   console.log("account", snapshot.val().account);
        console.log(account);
        if (account != "Anonymous") {
          if (snapshot.val().password === password) {
            navigate("/table");
          }
        }
        setShow(true);

        // ...
      },
      {
        onlyOnce: true,
      }
    );

    // await dispatch(loginThunk({ username, password })).then((req) => {
    //   // console.log(Object.is(req.payload, "fulfilled"));
    //   if(req.payload = "fulfilled"){
    //     window.location.replace(`/modules`);
    //   }
    // });
  };
  return (
    <>
      <div className="jobdes">
        <div className="container">
          <h1 className="font-medium text-center text-violet-700">
            Login {username}
          </h1>

          <div>
            <input
              className="inputClass"
              onChange={(event) => setUsername(event.target.value)}
              name="email"
              value={username}
              placeholder="Email"
            />
            <input
              className="inputClass"
              // onchange event: event occurs when value of element has been changed
              onChange={(event) => setPassword(event.target.value)}
              name="password"
              value={password}
              placeholder="Password"
            />

            <button
              className="buttonClass inputClass"
              // html dom event: onMouseOver, onMouseOut
              // event handling: allows javascript handle html event

              onClick={submitUser}
            >
              Login
            </button>
            <button className="buttonClass inputClass" onClick={GoogleLogin}>
              Login with Google
            </button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>This account {username} is not in DB</Modal.Title>
              </Modal.Header>
              <Modal.Body> Do not have your account</Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
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
