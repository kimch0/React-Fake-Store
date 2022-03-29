import React, { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./Category.css";
import Loading from "./Loading";
import Product from "./Product";



export default function Category(props) {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    let url = "https://fakestoreapi.com/products/category/" + props.url;
    let array = [];
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.forEach((element) => {
          array.push(element);
        });
        setProduct(array);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {product === null ? (
            <Loading/>
          ) : (
            product.map((el) => (
              <div className="col-4 mb-5" key={el.id}>
                <Link to={`/product/${el.id}`} className="text-decoration-none" >
                  <div className="card">
                    <img className="card-img-top" src={el.image} />
                    <div className="card-body">
                      <h5 className="card-tittle ">{el.title}</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item ps-0 fs-5 ">Price: ${el.price}</li>
                      </ul>
                    </div>
                  </div>
                  </Link>
              </div>
            ))
          )}
        </div>
        <Outlet/>
      </div>
    </>
  );
}
