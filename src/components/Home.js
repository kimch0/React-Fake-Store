import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./img/lavadoras.webp"
                className="d-block w-100"
                alt="Washing Machines"
              />
            </div>
            <div className="carousel-item">
              <img src="./img/pulsera.jpg" className="d-block w-100" alt="Bracelet" />
            </div>
            <div className="carousel-item">
              <img src="./img/reloj.jpg" className="d-block w-100" alt="Watch" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="text-center">
          <h2 className="mt-4 mb-4">Note</h2>
          <p className="fs-3">
            This is not a commercial web page, it was created to demostrate the
            use of the Javascript library React. The data is taken from a public API
            called FakeStoreAPI.
          </p>
        </div>
      </div>
    </>
  );
}
