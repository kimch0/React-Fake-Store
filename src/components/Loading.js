import React from "react";
import './Loading.css';

export default function Loading() {
  return (
    <>
      <div className="lds-ring position-absolute top-50 start-50 translate-middle">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
