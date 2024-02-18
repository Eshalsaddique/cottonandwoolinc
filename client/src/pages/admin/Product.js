import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);




  return (
    <Layout>
      <div className="list-product">
        <h1>All Products List</h1>
        <div className="format">
          <p>Product</p>
          <p>Title</p>
          <p>Description </p>
          <p>Price</p>
          <p>Quantity</p>
        </div>
        <div className="all-products">
          <hr />
          {products.map((p) => {
            return (
              <Link
                key={p._id}
                to={`/dashboard/admin/products/${p.slug}`}
                className="product-link"
              >
                <div className="format product-format">
                  <img
                    src={`/api/v1/products/product-photo/${p._id}`}
                    alt="product img"
                    className="product-icon"
                  />
                  <p>{p.name}</p>
                  <p>{p.description}</p>
                  <p>${p.price}</p>
                  <p>{p.quantity}</p>
                  
                </div>

             
                
                <hr />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
