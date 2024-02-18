import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <footer className='footer'>
  <div className="footer-main">
   <div className='left'>
    <img src='' alt='logo'/>
    <br/>
    <p> <FaFacebook/> <FaInstagram/> <FaPinterest/></p>
   
   </div>
   <div className='center-one'>
   <h4>INFORMATION</h4>
   
        <li><Link  className='footer-link'  to='/about'>About</Link></li>
        <li><Link  className='footer-link' to='/contact'>Contact</Link></li>
        <li><Link  className='footer-link' to='/policy'>Privacy Policy</Link></li>
     

    </div>

   <div className='center'>
   <h4>SERVICES</h4>
   
        <li>Guides</li>
        <li>News</li>
        <li>Technologies</li>
        <li>Cotton and Wool</li>

    </div>

    <div className='right'>
    <h4>ABOUT US</h4>
     
        <li>Our Story</li>
        <li>Success</li>
        <li>About Us</li>
        <li>Shipping</li>
   
    </div>
    
  </div>
  <div className='copyrights'>
    <div> <p>&copy;2024 COTTON AND WOOL INC.</p></div>
   
  </div>
  </footer> */}
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
