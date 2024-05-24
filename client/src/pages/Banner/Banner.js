import React from "react";

import { FaHandshake, FaUser } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";




const Banner = () => {

  let box = document.querySelector('.banner-cat-card');

  const btnpressprev =()=>{
  let width =box.clientWidth;
  box.scrollLeft -= width;
  };
  
  const btnpressnext =()=>{
    let width =box.clientWidth;
    box.scrollLeft += width;
  };

  
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
          <h1 className="gradient-text">Elevate Your Healthcare Apparel! </h1>
          <p>
            Welcome to Cotton & Wool – your go-to destination for premium
            quality textiles. From cozy bedsheets to plush towels, stylish
            scrubs, and comfy socks, we've got everything you need to elevate
            your home or business. Get in Contact via Email
          </p>
          <div className="content-input">
            <button type="button ">
              <a
                href="mailto:ccottonwwool@gmail.com"
                style={{
                  fontSize: "16px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Contact
              </a>
            </button>
          </div>
        </div>

        <div className="banner-image">
          <img src="/images/group.jpg" alt="img" />
        </div>
        <div className=""></div>
      </div>

      <div className="banner-main">
        <div className="banner-box">
          <FaHandshake
            style={{ color: "grey", fontSize: "50px", marginBottom: "10px" }}
          />
          <p>Years of Experience</p>
        </div>
        <div className="banner-box">
          <RiVerifiedBadgeLine
            style={{ color: "grey", fontSize: "50px", marginBottom: "10px" }}
          />
          <p>Quality & Satisfaction</p>
        </div>
        <div className="banner-box">
          <FaUser
            style={{ color: "grey", fontSize: "50px", marginBottom: "10px" }}
          />
          <p>Happy customers</p>
        </div>
        <div className="banner-box">
          <MdOutlineVerifiedUser
            style={{ color: "grey", fontSize: "50px", marginBottom: "10px" }}
          />
          <p>5 Year Warranty</p>
        </div>
      </div>

      <div className="banner-cat">
        <h1 className="gradient-text text-center p-10">Our Categories</h1>
        <div className="banner-cat-box">
        <button className="prebtn" onClick={btnpressprev}><p>&lt;</p></button>
        <button className="nextbtn" onClick={btnpressnext}><p>&gt;</p></button>


        <div className="banner-cat-card">
          <div className="cat-img">
        <img src="/images/cat1.jfif" alt="img" />
        <p>Towels</p>
          </div>
          <div className="cat-img">
        <img src="/images/cat7.jfif" alt="img" />
        <p>Medical Scrubs</p>
          </div>
          <div className="cat-img">
        <img src="/images/cat8.jpg" alt="img" />
        <p>Uniform</p>
          </div>
          <div className="cat-img">
        <img src="/images/cat5.jfif" alt="img" />
        <p>Patient Gowns</p>
          </div>
          <div className="cat-img">
        <img src="/images/cat6.jfif" alt="img" />
        <p>Socks</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
