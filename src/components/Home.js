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
                src="img/lavadoras.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="img/pulsera.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="img/reloj.jpg" className="d-block w-100" alt="..." />
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
          <h2 className="mt-4 mb-4">Disclaimer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            finibus nisl lacinia lacinia ullamcorper. Donec nec ipsum non nisl
            dignissim euismod. Fusce dapibus enim elit, non efficitur quam
            semper eget. Mauris euismod semper velit vel cursus. Etiam at magna
            magna. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Nunc vulputate, purus id tincidunt
            iaculis, dolor urna dignissim ipsum, id pellentesque ante velit
            interdum lorem. Maecenas nec iaculis enim. Suspendisse luctus dolor
            id blandit imperdiet. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Suspendisse rutrum
            ultrices risus eu vestibulum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean nulla turpis, suscipit non
            efficitur consequat, tempus non massa. Etiam feugiat odio ipsum,
            quis convallis enim interdum eget.
          </p>
        </div>
      </div>
    </>
  );
}
