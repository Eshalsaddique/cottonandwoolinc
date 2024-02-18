import React from "react";
import Layout from "../../components/layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus py-30 ">
        <div className="col-md-4 ">
          <img
            src="/images/contact.jfif"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h1
            className="gradient-text p-2 text-center"
            style={{ fontSize: "50px", fontWeight: "800" }}
          >
            CONTACT US
          </h1>
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
    </Layout>
  );
};

export default Contact;
