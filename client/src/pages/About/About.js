import React from "react";
import Layout from "../../components/layout/Layout";
import Hero from "../Hero/Hero";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <Hero />
      {/* <div className="row about ">
        <div className="about col-md-4">
          <img
            src="/images/about.jfif"
            alt="contactus"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div className="col-md-6 p-5">
          <h1
            className="gradient-text p-2  text-center"
            style={{ fontSize: "40px", fontWeight: "700" }}
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
          <p>
            Driven by a passion for excellence, we continually push the
            boundaries of what's possible, setting new standards in the
            industry. Our commitment to customer satisfaction fuels our
            relentless pursuit of perfection, ensuring that each product
            reflects our unwavering dedication to quality and craftsmanship.
          </p>
      
       
        
        </div>
      </div> */}

      <div className="gpt3-header">
       

        <div className="gpt3-header-content">
          <h1
            className="gradient-text text-center p-2 py-10"
            style={{ fontSize:"45px", fontWeight: "700",textAlign:"center" }}
          >
            ABOUT US{" "}
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
          <p className="text-justify mt-2 py-10 px-10">
            At the heart of our brand is a desire to enhance the lives of our
            customers by delivering exceptional products that not only meet but
            exceed their expectations. We believe in the power of comfort to
            inspire confidence and elevate daily experiences, and it is this
            belief that motivates us to innovate and excel in everything we do.
            Join us on our journey to redefine comfort and luxury, one step at a
            time.
          </p>
        </div>
        <div className="gpt3-header-img">
          <img src="/images/about.jfif" alt="img" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
