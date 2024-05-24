import React from "react";
import Layout from "../../components/layout/Layout";
import Hero from "../Hero/Hero";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <Hero />



      <div className="gpt3-header">
        <div className="gpt3-header-img">
          <img src="/images/group.jpg" alt="img" />
        </div>

        <div className="gpt3-header-content" style={{ alignItems: "center" }}>
          <h1
            className="gradient-text text-center p-2 py-10"
            style={{ fontSize: "45px", fontWeight: "800",marginTop:"20px" }}
          >
       ABOUT US
          </h1>
          <p className="text-justify mt-2 py-10 px-10">
            Our mission is to revolutionize everyday comfort with our line of
            premium linen towel socks surgical gowns medical staff uniforms
            security uniforms and scrubs. We are dedicated to crafting
            top-quality products that prioritize style, durability, and luxury.
            By combining innovative design with superior materials, we aim to
            provide our customers with unmatched comfort and confidence in every
            step they take.
          </p>
          <p className="text-justify mt-2 py-10 px-10">
            Driven by a passion for excellence, we continually push the
            boundaries of what's possible, setting new standards in the
            industry. Our commitment to customer satisfaction fuels our
            relentless pursuit of perfection, ensuring that each product
            reflects our unwavering dedication to quality and craftsmanship.
          </p>
        </div>
      </div>
      <div className="about-banner">
        <div className="about-banner-content">
          <h1>WHY CHOOSE US?</h1>
          <p>
            Here comfort meets style in every stitch. Dive into our world of
            cotton and wool wonders.Crafted with care and designed for your
            utmost satisfaction, our collection is your gateway to comfort .
            Join us on a journey where functionality meets fashion, and discover
            the perfect blend of practicality and luxury. Step into comfort with
            COTTON AND WOOL today.
          </p>
        </div>
      </div>

      {/* <div className="gpt3-header">
        <div className="gpt3-header-content" style={{ alignItems: "center" }}>
          <h1
            className="gradient-text text-center p-2 py-10"
            style={{ fontSize: "35px", fontWeight: "700", paddingTop: "2%" }}
          >
            OUR MISSION
          </h1>

          <p
            className="text-justify mt-2 py-10 px-10"
            style={{ fontSize: "14px" }}
          >
            Our mission is to revolutionize everyday comfort . At the heart of
            our brand is a desire to enhance the lives of our customers by
            delivering exceptional products that not only meet but exceed their
            expectations. We believe in the power of comfort to inspire
            confidence and elevate daily experiences, and it is this belief that
            motivates us to innovate and excel in everything we do. Join us on
            our journey to redefine comfort and luxury, one step at a time.
          </p>
        </div>
        <div className="gpt3-header-img">
          <img src="/images/about.jfif" alt="img" />
        </div>
      </div> */}




      <div className="gpt3-header">
        <div className="gpt3-header-content" style={{ alignItems: "center" }}>
          <h1
            className="gradient-text text-center"
            style={{ fontSize: "35px", fontWeight: "700", paddingTop: "2%" }}
          >
       OUR MISSION 
          </h1>

          <p
            className="text-justify mt-2  px-20"
            style={{ fontSize: "14px" }}
          >
            At the heart of
            our brand is a desire to enhance the lives of our customers by
            delivering exceptional products that not only meet but exceed their
            expectations. We believe in the power of comfort to inspire
            confidence and elevate daily experiences, and it is this belief that
            motivates us to innovate and excel in everything we do. Join us on
            our journey to redefine comfort and luxury, one step at a time.
          </p>
        </div>
        <div className="gpt3-header-img" style={{position:"relative"}}>
          <img src="/images/pattren1.jfif" alt="img" style={{maxWidth:"300px",height:"400px",minWidth:"200px"}}/>
          {/* <div className="info-about1">
            <span></span>
            <p>Quality and satisfaction</p>
          </div>
          <div className="info-about2">
            <span></span>
            <p>Years of Experience</p>
          </div>
          <div className="info-about3">
            <span></span>
            <p>Happy Clients</p>
          </div> */}
        </div>
      </div>



      
    </Layout>
  );
};

export default About;
