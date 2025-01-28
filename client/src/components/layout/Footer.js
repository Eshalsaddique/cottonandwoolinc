import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
     
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Shipping</Link>
                </li>
                <li>
                  <Link to="/">Payment</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Online Shop</h4>
              <ul>
                <li>
                  <Link to="/">Medical Scrubs</Link>
                </li>
                <li>
                  <Link to="/">Patient Gown</Link>
                </li>
                <li>
                  <Link to="/">Towels</Link>
                </li>
                <li>
                  <Link to="/">Socks</Link>
                </li>
                <li>
                  <Link to="/">Bedsheets</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <Link to="https://www.instagram.com/ccottonwwool">
                  <FaInstagram />
                </Link>
                <Link to="https://www.facebook.com">
                  <FaFacebook />
                </Link>
                <Link to="https://twitter.com">
                  <FaTwitter />
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrights">
        <p>&copy;2024COTTONANDWOOLINC.COM</p>
      </div>
    </>
  );
}

export default Footer;
