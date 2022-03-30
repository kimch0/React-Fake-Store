import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("user") !== null) {
      setUser(JSON.parse(window.sessionStorage.getItem("user")));
      setAuth(true);
    }
  }, []);

  const redirect = () => {
    console.log(stringValPatternValidation(search));
    if (stringValPatternValidation(search)) {
      navigate("/search/" + search);
    }
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      redirect();
    }
  };

  const logout = () => {
    window.sessionStorage.removeItem("user");
    sessionStorage.clear();
    window.location.reload();
  };

  const stringValPatternValidation = (stringVal) => {
    return stringVal !== "";
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="row align-items-center">
          <div className="col-1 p-0">
            <a className="navbar-brand" href="/React-Fake-Store/">
              <img
                src="./img/Logo.png"
                style={{ maxWidth: "100%", objectFit: "cover" }}
                alt="Shopping Logo"
              />
            </a>
          </div>
          <div className="col-8">
            <form className="d-flex" onKeyPress={(e) => keyHandler(e)}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleChange}
              />
              <button type="button" className="button" onClick={redirect}>
                Search
              </button>
            </form>
          </div>
          <div className="col-3 d-flex justify-content-evenly p-0">
            <div className="w-100">
              {auth ? (
                <div className="w-100 d-flex justify-content-evenly">
                  <p>
                    Welcome{" "}
                    {user.name.firstname.charAt(0).toUpperCase() +
                      user.name.firstname.slice(1)}{" "}
                  </p>
                  <label onClick={logout} className="label">
                    Logout
                  </label>
                </div>
              ) : (
                <div className="text-center">
                  <Link to="/login" className="w-100">
                    Log in
                  </Link>
                </div>
                // <div className="w-100 text-center">
                //   <a href="/login">Log in</a>
                // </div>
              )}
            </div>
            <div className="me-4">
              <Link to="/shoppingCart">
                <img
                  src="./img/shoppingCart.jpg"
                  style={{ maxWidth: "25px" }}
                  alt="Shopping Cart"
                />
              </Link>
              {/* <a href="/shoppingCart">
                <img
                  src="./img/shoppingCart.jpg"
                  style={{ maxWidth: "25px" }}
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-around w-100">
              <Link to="/" className="nav-link p-2 fs-5">
                Home
              </Link>
              <Link to="/electronics" className="nav-link p-2 fs-5">
                Electronics
              </Link>
              <Link className="nav-link p-2 fs-5" to="/jewelery">
                Jewelery
              </Link>
              <Link className="nav-link p-2 fs-5" to="/men's_clothing">
                Men's Clothing
              </Link>
              <Link className="nav-link p-2 fs-5" to="/women's_clothing">
                Women's Clothing
              </Link>
              <Link className="nav-link p-2 fs-5" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
