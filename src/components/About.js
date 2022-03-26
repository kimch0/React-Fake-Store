import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="container w-25 text-center">
        <h3>Used Complements</h3>
        <ul>
          <li>React.js v17.0.x</li>
          <li>React Router v6.2.x </li>
          <li>Bootstrap v5.1</li>
        </ul>
        <h3>Extra</h3>
        <p className="fs-5">
          The front-end is not my strenght, I apologize for the poor design.
        </p>
      </div>
    </>
  );
}
