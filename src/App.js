import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Category from "./components/Category";
import Product from "./components/Product";
import Search from "./components/Search";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/shoppingCart" element={<Cart />} />

        <Route path="/about" element={<About />} />
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
      </Routes>

      {/* <Route path="/login" element={<Login />} />
          <Route path="/shoppingCart" element={<Cart />} />
          <Route path="/" index element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route
            path="/electronics"
            
            element={<Category url="electronics" />}
          />
          <Route
            path="/jewelery"
            element={<Category url="jewelery" />}
          />
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
          </Route> */}
    </div>
  );
}

export default App;
