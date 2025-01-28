import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
// import { FaCartArrowDown } from "react-icons/fa";
// import { useCart } from "../../context/cart";
// import toast from "react-hot-toast";

const ProductDetail = () => {
  // const [cart,setCart] = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({});

  const handleBackButton = () => {
    navigate(-1); // Navigate to the previous location
  };

  //initial product detail
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/products/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
        <div className="row container product-details">
          <div className="col-md-6" style={{alignItems:"center", display:"flex"}}>
            <img
              src={`/api/v1/products/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
              style={{height:"300px",width:"300px"}}
            />
          </div>
          <div className="col-md-6 product-details-info">
            <h1 className="gradient-text text-center" style={{fontSize:"34px"}}>Product Detail</h1>
            <br/>
            <h6 style={{ fontWeight: "700", padding: 8 }}>
              Name : {product.name}{" "}
            </h6>
            <h6
              style={{ fontWeight: "600", padding: 8, whiteSpace: "pre-wrap" }}
            >
              Description :{" "}
              <p style={{ fontWeight: "500", padding: 8 }}>
                {" "}
                {product.description}
              </p>
            </h6>
            <h6 style={{ fontWeight: "600", padding: 8 }}>
              Price :
              {product?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h6>
            <h6 style={{ fontWeight: "600", padding: 8 }}>
              Quantity : {product.quantity}
            </h6>
            <h6 style={{ fontWeight: "600", padding: 8 }}>
              Category : {product?.category?.name}
            </h6>
            <button
              class="btn btn-secondary ms-1"
              
              onClick={handleBackButton}
            >
              back
            </button>
           
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
