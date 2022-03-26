import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCar } from "../hooks/addCar";
import Loading from "./Loading";

import './Product.css'

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  const addNum = () => setQuantity(quantity+1);
  const subNum = () => {
    if(quantity > 1 ){
      setQuantity(quantity - 1)
    }
  }

  const addToCar = (product,quantity) => {
    addCar(product,quantity)
    alert('Product added')
  }

  return (
    <>
      {product === null ? (
        <Loading/>
      ) : (
        <div className="text-center">
          <div className="center">
          <img
            src={product.image}
            className="img-fluid"
            alt={product.title}
            style={{ maxHeight: "500px" }}
          />
          </div>
          <div className="w-50 center">
            <h2>{product.title}</h2>
            <h3 className="fs-5 mt-3 mb-3 fw-normal">{product.description}</h3>
            <h4>Price: ${product.price}</h4>
            <label>{quantity}</label> <br/>
            <button className="border border-dark rounded m-2" onClick={addNum} style={{width: "40px"}}>+</button>
            <button className="border border-dark rounded m-2" onClick={subNum} style={{width: "40px"}}>-</button>
            <br/>
            <button type='button' onClick={(e) => addToCar(product,quantity)}>Add to the car</button>
          </div>
        </div>
      )}
    </>
  );
}
