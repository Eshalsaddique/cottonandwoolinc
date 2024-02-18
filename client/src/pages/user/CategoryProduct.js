import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";

const CategoryProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const params = useParams();



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

//get product by category
  
  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/products/product-category/${params.slug}`);

      setProducts(data.products);
      setCategory(data.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  return (
    <>
      <Layout>
        <div className="container mt-3 category">
          <h6 className="text-center">
            <b>Category :</b> {category?.name}
          </h6>
          <h6 className="text-center">{products?.length} Products found </h6>
        </div>
        <div className="category-product">
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
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h6>
                  <button
                    onClick={() => navigate(`/products/${p.slug}`)}
                    className="details"
                  >
                    Details
                  </button>
                </div>
              );
            })}
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

export default CategoryProduct;
