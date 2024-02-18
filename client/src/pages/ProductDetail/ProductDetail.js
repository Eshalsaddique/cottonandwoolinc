import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { useNavigate ,useLocation} from "react-router-dom";

const ProductDetail = () => {
    const  location = useLocation();
    const navigate = useNavigate();
   const params = useParams();
  const [product ,setProduct] = useState({});

  //initial product detail
  useEffect(()=>{
    if(params?.slug) getProduct();

  },[params?.slug])


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
        <div className="col-md-6">
          <img
            src={`/api/v1/products/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="350"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6 style={{fontWeight:"700" ,padding:8}}>Name :     {product.name}</h6>
          <h6 style={{fontWeight:"700" ,padding:8}}>Description :   {product.description}</h6>
          <h6 style={{fontWeight:"700" ,padding:8}}>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6 style={{fontWeight:"700" ,padding:8}}>Quantity : {product.quantity}</h6>
          <h6 style={{fontWeight:"700" ,padding:8}}>Category : {product?.category?.name}</h6>
          <button class="btn btn-secondary ms-1"   onClick={() =>  navigate(location.state || '/')}>back</button>
        </div>
      </div>
   </Layout>
   </>
  )
}

export default ProductDetail

