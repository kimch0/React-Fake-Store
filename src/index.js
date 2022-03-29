import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Category from "./components/Category";
import Product from "./components/Product";
import Search from "./components/Search";
import Login from "./components/Login";
import Cart from "./components/Cart";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="React-Fake-Store">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shoppingCart" element={<Cart />} />
          <Route path="/electronics" element={<Category url="electronics" />} />
          <Route path="/jewelery" element={<Category url="jewelery" />} />
          <Route
            path="/men's_clothing"
            element={<Category url="men's clothing" />}
          />
          <Route
            path="/women's_clothing"
            element={<Category url="women's clothing" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/search" element={<Search />}>
            <Route path=":name" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
