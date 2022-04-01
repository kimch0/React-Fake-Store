import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import "./Login.css"

export default function Login() {
  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [complete, setComplete] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  let navigate = useNavigate();
  useEffect(() => {
    let array = [];

    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => {
        json.forEach((element) => {
          array.push(element);
        });

        setUserList(array);
        setComplete(true);
      });

    if (sessionStorage.getItem("user") !== null) {
      window.location.href = window.location.origin;
    }
    
  }, []);

  const authData = async () => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    try {
      const fetchResponse = await fetch(
        "https://fakestoreapi.com/auth/login",
        settings
      );
      if (!fetchResponse.ok) {
        throw {
          err: true,
          status: fetchResponse.status,
          statusText: !fetchResponse.statusText
            ? "Ocurrió un error"
            : fetchResponse.statusText,
        };
      }
      const data = await fetchResponse.json();

      if (data !== null) {
        for (let i = 0; userList.length; i++) {
          if (userList[i].username === username) {
            let user = userList[i];
            window.sessionStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            window.location.reload();
          }
        }
      }
    } catch (e) {
      if (e.err === true) {
        window.alert("Incorrect username or password");
      }
    }
  };

  const handleChange = (event) => {
    if (event.target.id === "user") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  return (
    <>
      <div className="container w-50 d-flex flex-column mb-5 " id="userForms">
        <label>Username</label>
        <input
          value={username}
          type="text"
          id="user"
          onChange={handleChange}
        ></input>
        <label>Password</label>
        <input
          value={password}
          type="text"
          id="pass"
          onChange={handleChange}
        ></input>

        <button
          type="button"
          className="w-25 align-self-center mt-4"
          onClick={authData}
        >
          Login
        </button>
      </div>

      <div className="w-100 container text-center mb-5" id="noteDiv">
        <h3>Note</h3>
        <p>
          Unfurtunately, you can't create your own user, but you can use any of
          the accounts that the API provides.
        </p>
      </div>

      <div className="d-flex">
        {!complete ? (
          <Loading />
        ) : userList.length === 0 ? (
          <h2>There was no result!</h2>
        ) : (
          <div className="container w-75 text-center" id="infoUsers">
            <label className="w-50 fs-3">Username</label>
            <label className="w-50 fs-3">Password</label>
            <hr />
            {userList.map((el) => (
              <div className="d-flex" key={el.id}>
                <div className="w-50">
                  <h5>{el.username}</h5>
                  <hr />
                </div>
                <div className="w-50">
                  <h5>{el.password}</h5>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
