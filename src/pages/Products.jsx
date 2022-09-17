import axios from "axios";
import { useEffect } from "react";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import ModalCreate from "../components/ModalCreate";


const Products = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://seemly-business-production.up.railway.app/api/v1/category?limit=10")
      .then((res) => setCategory(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
    <ModalCreate/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`${item.id}`}>
                  <button className="btn btn-primary">Detail</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
