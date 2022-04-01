import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import "./Search.css"

export default function Search() {
  const [search, setSearch] = useState(null);
  const [complete, setComplete] = useState(false);
  const { name } = useParams();
  
  useEffect(() => {
  
    let array = [];
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        for (let i = 0; i < json.length; i++) {
          if (json[i].title.toLowerCase().includes(name.toLocaleLowerCase())) {
            array.push(json[i]);
          }
        }
        setSearch(array);
        setComplete(true);
      });
  }, [name]);


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mb-3">
          <h2 className="">Results</h2>
        </div>
        <div className="row">
          {!complete ? (
            <Loading />
          ) : search.length === 0 ? (
            <h2>There was no result!</h2>
          ) : (
            search.map((el) => (
              <div className="col-lg-4 mb-5" key={el.id}>
                <Link to={`/product/${el.id}`} className="text-decoration-none">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={el.image}
                      alt={el.title}
                    />
                    <div className="card-body">
                      <h5 className="card-tittle ">{el.title}</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item ps-0 fs-5 ">
                          Price: ${el.price}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}

          
        </div>
      </div>
    </>
  );
}
