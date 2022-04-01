import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import "./Cart.css";
import { deleteCar } from "../hooks/deleteCar";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [carList, setCarList] = useState([]);
  const [complete, setComplete] = useState(false);
  const [total, setTotal] = useState(0.0);

  let navigate = useNavigate();

  const products = JSON.parse(window.sessionStorage.getItem("product"));
  const userInfo = JSON.parse(window.sessionStorage.getItem("user"));

  useEffect(() => {
    if (products !== null) {
      setCarList(products);
      addTotal();
    }

    setComplete(true);
  }, []);

  const addTotal = () => {
    let sum = 0.0;
    products.forEach((element) => {
      sum = sum + element.price * element.quantity;
    });
    setTotal(sum);
  };

  const delCar = (id) => {
    deleteCar(id);
  };
  const purchase = () => {
    sessionStorage.removeItem("product");
    alert('Purchase complete.')
    navigate('/')
    window.location.reload();
  }

  return (
    <>
      <div className="text-center">
        {userInfo === null ? (
          <h2>Shopping car of: Guest</h2>
        ) : (
          <h2>
            Shopping car of:{" "}
            {userInfo.name.firstname.charAt(0).toUpperCase() +
              userInfo.name.firstname.slice(1)}{" "}
            {userInfo.name.lastname.charAt(0).toUpperCase() +
              userInfo.name.firstname.slice(1)}{" "}
          </h2>
        )}
      </div>
      <div className="d-flex text-center align-items-center flex-column">
        {!complete ? (
          <Loading />
        ) : carList.length === 0 ? (
          <h2>There are no items in the cart.</h2>
        ) : (
          carList.map((el) => (
            <div id="card" className="card mb-3 w-75 h-100" key={el.id}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src={el.image}
                    className="img-fluid rounded-start mt-1 mb-3"
                    alt={el.title}
                  />
                </div>
                <div className="col-md-8 d-flex justify-content-center">
                  <div className="card-body ms-5 me-5 pe-5 ps-5" id="productInfoDiv">
                    <h4 className="card-title mb-3 mt-3">{el.title}</h4>
                    <h5 className="mb-3">Price: ${el.price}</h5>
                    <h5 className="mb-3">Quantity: {el.quantity}</h5>
                    <button onClick={(e) => delCar(el.id)}><img src="./img/trashIcon.png" id="trashCan" alt="Trash icon"></img></button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="d-flex justify-content-evenly mb-5">
        {
          carList.length > 0 && (
            <div className="d-flex justify-content-evenly mb-5 w-50" id="totalDiv">
              <h3 id="total">Total: ${total.toFixed(2)}</h3>
              <button onClick={purchase}>Purchase</button>
            </div>
          )
        }
      </div>
    </>
  );
}
