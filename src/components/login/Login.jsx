import React, { useState } from "react";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router";

export const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const db = getDatabase();
  const navigate = useNavigate();

  async function writeNewPost() {
    const db = getDatabase();
    try {
      await set(ref(db, `/auth/${username}`), {
        account: username,
        password: password,
      }).then(() => {
        console.log("Data saved successfully!");
        // Data saved successfully!
      });
    } catch (error) {
      console.log(error);
      // The write failed...
    }
  }

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
              Submit
            </button>
            <button
              className="buttonClass inputClass"
              // html dom event: onMouseOver, onMouseOut
              // event handling: allows javascript handle html event

              onClick={writeNewPost}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
