import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Product.css'

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products/" + id;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  return (
    <>
      {product === null ? (
        <h3>Loading</h3>
      ) : (
        <div className="text-center">
          <div className="center">
          <img
            src={product.image}
            class="img-fluid"
            alt="..."
            style={{ maxHeight: "500px" }}
          />
          </div>
          <div className="w-50 center">
            <h2>{product.title}</h2>
            <h3 className="fs-5 mt-3 mb-3 fw-normal">{product.description}</h3>
            <h4>Price: ${product.price}</h4>
          </div>
        </div>
      )}
    </>
  );
}
