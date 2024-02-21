import React from "react";
import Layout from "../../components/layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="d-flex flex-wrap" style={{justifyContent:"center"}}>
        <div className="contact-img col-md-3">
          <img
            src="/images/privacy3.jfif"
            alt="contactus"
            style={{ width: "100%", height: "300px" }}
          />
        </div>
        <div className="col-md-6 p-5">
          <h1
            className="gradient-text p-2 text-center"
           style={{fontSize:"50px",fontWeight:"800"}}
          >
            OUR POLICY
          </h1>
          <p>
            Our Privacy Policy outlines how we collect, use, and protect your
            personal information. We prioritize the security and confidentiality
            of your data, ensuring it is used solely for legitimate business
            purposes. For more details, please read our full Privacy Policy
            below.
          </p>
        </div>
      </div>
      <div className="about-card">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Information Collection</p>
              <p></p>
            </div>
            <div className="flip-card-back">
              <p className="title"></p>
              <p className="info-about">
                We collect personal information, such as name, email address,
                shipping address, and payment details, when you place an order
                or register an account on our website.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Use of  that  Information</p>
              <p className="info-about"></p>
            </div>
            <div className="flip-card-back">
              <p className="title"></p>
              <p className="info-about">
                We use the information collected to process orders, communicate
                with customers, personalize user experience, improve our
                products and services, and comply with legal obligations.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Data Security</p>
              <p className="info-about"></p>
            </div>
            <div className="flip-card-back">
              <p className="title"></p>
              <p className="info-about">
                We implement various security measures to protect your personal
                information from unauthorized access, disclosure, alteration, or
                destruction. However, no method of transmission over the
                internet or electronic storage is 100% secure.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Changes in our Policy</p>
              <p className="info-about"></p>
            </div>
            <div className="flip-card-back">
              <p className="title"></p>
              <p className="info-about">
                We reserve the right to update or change our Privacy Policy at
                any time. Any changes will be posted on this page with a revised
                effective date. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Layout>
  );
};

export default Policy;
