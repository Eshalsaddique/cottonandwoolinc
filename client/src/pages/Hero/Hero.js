import React from "react";

const Hero = () => {
  return (
    <>
      <div className="gpt3-header">
      <div className="gpt3-header-img">
          <img src="/images/hero.jfif" alt="img" />
        </div>
        <div className="gpt3-header-content">
          <h1 className="gradient-text">
         Empowering Retailers with Premium Wholesale Solution !          </h1>
          <p>
            Welcome to Cotton & Wool – your go-to destination for premium
            quality textiles. From cozy bedsheets to plush towels, stylish
            scrubs, and comfy socks, we've got everything you need to elevate
            your home or business. 
          </p>
          <div className="gpt3-header-content-input">
            <button type="button "> <a  href="mailto:ccottonwwool@gmail.com" style={{fontSize:"12px",textDecoration:"none",color:"white",fontWeight:"500"}}>Get In Touch</a></button>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Hero;
