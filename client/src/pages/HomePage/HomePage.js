import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox } from "antd";
import { AiOutlineReload } from "react-icons/ai";

import Banner from "../Banner/Banner";
// import { FaCartArrowDown } from "react-icons/fa";
// import { useCart } from "../../context/cart";
// import toast from "react-hot-toast";

const HomePage = () => {
  const navigate = useNavigate();
  // const [cart,setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/products/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/products/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };
  //load more function

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/products/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //filter by category

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  //lifecycle method
  useEffect(() => {
    if (!checked.length) getAllProducts();
    //eslint-disable-next-line
  }, [checked.length]);
  useEffect(() => {
    if (checked.length) filterProduct();
  }, 
[checked]);

  //get filter product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`/api/v1/products/product-filters`, {
        checked,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
       <Banner/>
        <div className="filter mt-3" >
          <h5 className="text-center">Filter By Category</h5>
          <div className="d-flex flex-wrap justify-content-center">
            {categories?.map((c) => {
              return (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              );
            })}
          </div>
          <div
            className="d-flex flex-wrap justify-content-center"
            style={{ marginTop: 20 }}
          >
            <button
              className="btn " style={{background:"black",color: "#fff"}}
              onClick={() => window.location.reload()}
            >
              Reset Filter
            </button>
          </div>
        </div>
        <hr />
        <div className="mt-3">
          <div>
            <h1 className="gradient-text text-center" style={{fontSize:"36px",fontWeight:"bold",fontFamily:"Playfair Display"}}>ALL PRODUCTS</h1>

            <div className="card">
              {products?.map((p) => {
                return (
                  <div className="content">
                    <img
                      src={`/api/v1/products/product-photo/${p._id}`}
                      alt={p.name}
                    />
                    <h3>{p.name}</h3>
                    <p>{p.description.substring(0, 25)}...</p>
                    <h6>
                      {/* {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })} */}
                       {p.price ? p.price.toLocaleString("en-US", {
                         style: "currency",
                        currency: "USD",
                          }) : 'Price not available'}
                    </h6>
                    <button
                      onClick={() => navigate(`/products/${p.slug}`)}
                      className="details"
                    >
                      Details
                    </button>
                    {/* <button
                    className="add-to-cart"
                    onClick={()=>{
                      setCart([...cart,p])
                      toast.success("Item added to cart")
                      }}>
                      <FaCartArrowDown/>
                    </button> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex justify-content-center m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
