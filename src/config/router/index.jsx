import { React } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Detail from "../../pages/Detail";
import Home from "../../pages/Home";
import Page404 from "../../pages/Page404";
import Products from "../../pages/Products";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products/1">Detail</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
