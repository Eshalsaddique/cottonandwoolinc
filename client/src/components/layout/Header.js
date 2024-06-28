import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import useCategory from "../../hooks/useCategory";
// import { FaCartArrowDown } from "react-icons/fa";
// import { useCart } from "../../context/cart";
// import {Badge} from 'antd';

const Header = () => {
  const [auth, setAuth] = useAuth();
  // const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("logout successfully");
  };

  return (
    <>
      {/* bg-body-tertiary */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" class="navbar-brand">
            <div className="logo">
              <img
                src="/images/nav-logo.png"
                alt=""
                style={{ width: "34px", height: "30px", marginRight: "5px" }}
              />
              <div
                style={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "20px",
                  paddingTop: "5px",
                }}
              >
                COTTON AND WOOL
              </div>
             


            </div>
          </Link>

           
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" class="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" class="nav-link" href="#">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <Link to="/register" class="nav-link" href="#">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" class="nav-link" href="#">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          dashboard
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          onClick={handleLogout}
                          to="/"
                          class="dropdown-item"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
             
            </ul>
             
          </div>
         {/* example */}
         {/* <div>
          <Badge count={cart?.length} showZero>
               <Link to="/cart" class="cart-icon" href="#">
                  <FaCartArrowDown />
                </Link>
                </Badge>
                </div> */}
        </div>
         
      </nav>
    </>
  );
};

export default Header;
