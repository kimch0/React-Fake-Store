import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
export default function Navbar() {
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="header p-3">
        <div className="row">
          <div className="col-1">
            <a className="navbar-brand" href="/">
              Navbar
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
              
              <Link to={`/search/${search}`} className="btn btn-primary">Search</Link>
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
