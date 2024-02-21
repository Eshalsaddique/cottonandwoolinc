import React from "react";
import Layout from "../../components/layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="d-flex flex-wrap" style={{justifyContent:"space-around"}}>
        <div className="contact-img col-md-3">
          <img
            src="/images/contact.jfif"
            alt="contact"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6" style={{margin:'2%', paddingTop:'1%'}}>
          <h1
            className="gradient-text p-2 text-center"
            style={{ fontSize: "50px", fontWeight: "800" }}
          >
            CONTACT US
          </h1>
          <div  className="contact-p d-flex flex-column">
          <p className="text-justify mt-2">
            Interested in wholesale orders? Contact us 
            to inquire about bulk pricing and
            customized solutions for your business needs. Let Cotton & Wool be
            your trusted partner in providing high-quality textiles at wholesale
            prices. Email us today to start a conversation!"
          </p>
          <p className="mt-3">
            <BiMailSend />{" "}
            <a
              href="mailto:ccottonwwool@gmail.com"
              style={{
                fontSize: "16px",
                textDecoration: "none",
                color: "black",
                fontWeight: "600",
              }}
            >
              : ccottonwwool@gmail.com
            </a>
          </p>
          <p
            className="mt-3"
            style={{
              fontSize: "16px",
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
            }}
          >
            <BiPhoneCall /> : 012-3456789
          </p>

          <p
            className="mt-3"
            style={{
              fontSize: "16px",
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
            }}
          >
            <FaInstagram />{" "}
            <Link
              to="https://www.instagram.com/ccottonwwool"
              style={{ textDecoration: "none", color: "black" }}
            >
              : @CCOTTONWWOOL
            </Link>
          </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
