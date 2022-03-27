import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Category from "./components/Category";
import Product from "./components/Product";
import Search from "./components/Search";
import Login from "./components/Login";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/React-Fake-Store/login" element={<Login />} />
          <Route path="/React-Fake-Store/shoppingCart" element={<Cart />} />

          <Route path="/React-Fake-Store/" element={<Home />} />
          <Route path="/React-Fake-Store/about" element={<About />} />
          <Route path="/React-Fake-Store/electronics" element={<Category url="electronics" />} />
          <Route path="/React-Fake-Store/jewelery" element={<Category url="jewelery" />} />
          <Route
            path="/React-Fake-Store/men's_clothing"
            element={<Category url="men's clothing" />}
          />
          <Route
            path="/React-Fake-Store/women's_clothing"
            element={<Category url="women's clothing" />}
          />
          <Route path="/React-Fake-Store/product" element={<Product />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/React-Fake-Store/search" element={<Search />}>
            <Route path=":name" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
