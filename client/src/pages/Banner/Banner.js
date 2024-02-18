import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
    {/* <div className="banner-main">
      <div className="banner">
        <div className="ban-container">
        <h1>Welcome to Cotton & Wool</h1>
        <p>
            From cozy bedsheets to plush towels, stylish scrubs, and
          comfy socks, we've got everything you need to elevate your home or
          business.Get in contact via Email.
        </p>
        <button>Contact</button>
        </div>
      </div>
      </div> */}

<div className="banner">
        <div className="banner-content">
          <h1>
         Empowering Retailers with Premium Wholesale Solution !          </h1>
          <p>
            Get in Contact via Email
          </p>
          <div className="content-input">
          <button type="button ">
        <a href="mailto:ccottonwwool@gmail.com" style={{fontSize:"16px",textDecoration:"none",fontWeight:"500"}}>Contact</a>
        </button>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Banner;
