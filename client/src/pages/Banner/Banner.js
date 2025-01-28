import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



// import { FaHandshake, FaUser } from "react-icons/fa";
// import { RiVerifiedBadgeLine } from "react-icons/ri";
// import { MdOutlineVerifiedUser } from "react-icons/md";

const options = {
  margin: 20,
  responsiveClass: true,
  nav: false,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
    600: {
      items: 3,
    },
    700: {
      items: 5,
    },
    1000: {
      items: 7,
    },
  },
};

const Banner = () => {
  return (
    <>
   
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel"style={{height:"400px"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/car3.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block" style={{"color":"white"}}>
      <h5 style={{"color":"white"}}>Elevate Your Healthcare Apparel!</h5>
        <p>Welcome to Cotton & Wool – your go-to destination for premium
            quality textiles. From cozy bedsheets to plush towels, stylish
            scrubs, and comfy socks, we've got everything you need to elevate
            your home or business. Get in Contact via Email</p>
            <button type="button ">
              <a
                href="mailto:ccottonwwool@gmail.com"
                
              >
                Contact
              </a>
            </button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/car2.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Elevate Your Healthcare Apparel!</h5>
        <p>Welcome to Cotton & Wool – your go-to destination for premium
            quality textiles. From cozy bedsheets to plush towels, stylish
            scrubs, and comfy socks, we've got everything you need to elevate
            your home or business. Get in Contact via Email</p>
            <button type="button ">
              <a
                href="mailto:ccottonwwool@gmail.com"
               
              >
                Contact
              </a>
            </button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/car1.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{"color":"white"}}>Elevate Your Healthcare Apparel!</h5>
        <p>Welcome to Cotton & Wool – your go-to destination for premium
            quality textiles. From cozy bedsheets to plush towels, stylish
            scrubs, and comfy socks, we've got everything you need to elevate
            your home or business. Get in Contact via Email.</p>
            <button type="button ">
              <a
                href="mailto:ccottonwwool@gmail.com"
                
              >
                Contact
              </a>
            </button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>









      {/* <div className="banner">
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
      </div> */}

      {/* <div className="banner-main">
        <div className="banner-box">
          <FaHandshake
            style={{ color: "grey", fontSize: "35px", marginBottom: "10px" }}
          />
          <p>Years of Experience</p>
        </div>
        <div className="banner-box">
          <RiVerifiedBadgeLine
            style={{ color: "grey", fontSize: "35px", marginBottom: "10px" }}
          />
          <p>Quality & Satisfaction</p>
        </div>
        <div className="banner-box">
          <FaUser
            style={{ color: "grey", fontSize: "35px", marginBottom: "10px" }}
          />
          <p>Happy customers</p>
        </div>
        <div className="banner-box">
          <MdOutlineVerifiedUser
            style={{ color: "grey", fontSize: "35px", marginBottom: "10px" }}
          />
          <p>5 Year Warranty</p>
        </div>
      </div> */}

      

      <div className="carosel">
        <h1 className="gradient-text text-center">Our Categories</h1>
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          <div className="item">
            <img src="/images/cat1.jfif" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat6.jfif" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat7.jfif" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat1.jfif" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat2.png" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat8.jpg" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat6.jfif" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat7.jfif" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat8.jpg" alt="img" />
          </div>
          <div className="item">
            <img src="/images/cat2.png" alt="img" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Banner;
