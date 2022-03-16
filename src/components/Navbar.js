import React, { useState } from "react";
import { Link, Route, useNavigate } from "react-router-dom";
import Search from "./Search";

import "./Navbar.css";
export default function Navbar() {
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  const redirect = () => {
    console.log(stringValPatternValidation(search));
    if (stringValPatternValidation(search)) {
      navigate("/search/" + search);
    } else {
      window.alert("Empty");
    }
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
            <a className="navbar-brand" href="/">
              <img src="../img/Logo.png" style={{maxWidth: "100%",objectFit: 'cover'}}/>
            </a>
          </div>
          <div className="col-8">
            <form className="d-flex">
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
          <div className="col-1">
            <a>Log in</a>
          </div>
          <div className="col-1">
            <a>Sign up</a>
          </div>
          <div className="col-1">
            <a>Icon</a>
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
              <a className="nav-link p-2 fs-5" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link p-2 fs-5" href="/electronics">
                Electronics
              </a>
              <a className="nav-link p-2 fs-5" href="/jewelery">
                Jewelery
              </a>
              <a className="nav-link p-2 fs-5" href="/men's_clothing">
                Men's Clothing
              </a>
              <a className="nav-link p-2 fs-5" href="/women's_clothing">
                Women's Clothing
              </a>
              <a className="nav-link p-2 fs-5" href="/about">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
