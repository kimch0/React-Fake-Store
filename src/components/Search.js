import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState(null);
  const { name } = useParams();
  let complete = false;
  console.log(name);
  useEffect(() => {
    let array = [];
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        for (let i = 0; i < json.length; i++) {
          if (json[i].title.toLowerCase().includes(name.toLocaleLowerCase())) {
            array.push(json[i]);
          }
        }
        setSearch(array);
        complete = true;
      });
  }, [name]);

  return (
    <>
      <div className="container">
        <div className="row">
          {search === null ? (
            <p>Loading</p>
          ) : (
            search.map((el) => (
              <div className="col-4" key={el.id}>
                <Link to={`/product/${el.id}`} className="text-decoration-none">
                  <div className="card">
                    <img className="card-img-top" src={el.image} />
                    <div className="card-body">
                      <h5 className="card-tittle">{el.title}</h5>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item p-0 fs-5">Price: ${el.price}</li>
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
