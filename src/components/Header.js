import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { login, logout, register } from "../actions/userActions";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ location }) => {
  let history = useHistory();
  const [opencart, setopencart] = useState(false);
  const [opensignin, setopensignin] = useState(false);
  const [opensignup, setopensignup] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userRegister = useSelector((state) => state.userRegister);
  const {
    loading: signuploading,
    error: signupError,
    userInfo: userInfos,
  } = userRegister;

  //   const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (opensignup == true) {
      if (userInfos) {
        setopensignup(false);
      }
    }
  }, [history, userInfo, dispatch]);

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, phoneNumber, email, password));
  };

  const signinHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const logoutHandler = (e) => {
    dispatch(logout);
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = (e) => {
    e.preventDefault();
    setopencart(false);
    userInfo ? history.push("/checkout") : setopensignin(true);
  };

  return (
    <div>
      {/* <!-- Start Header --> */}
      <header>
        <div className="header-part header-reduce sticky">
          <div className="header-top">
            <div className="container">
              <div className="header-top-inner">
                <div className="header-top-left">
                  <a href="#" className="top-cell">
                    <img src="assets/images/fon.png" alt="img" />{" "}
                    <span>123-456-7890</span>
                  </a>
                  <a href="#" className="top-email">
                    <span>support@laboom.com</span>
                  </a>
                </div>
                <div className="header-top-right">
                  <div className="social-top">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>

                      {/* <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li> */}
                    </ul>
                  </div>
                  {userInfo ? (
                    <div className="language-menu">
                      <a href="#" className="current-lang">
                        <img
                          src="assets/img/avatar.jpg"
                          style={{ height: "40px", borderRadius: "50%" }}
                          alt="avatar"
                        />
                        <span style={{ padding: "0px 10px" }}>My Account</span>
                      </a>
                      <ul>
                        <li>
                          <a>
                            <NavLink to="/track">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              Track Current Order
                            </NavLink>
                          </a>
                        </li>
                        <li>
                          <a>
                            <NavLink to="/history">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              Order History
                            </NavLink>
                          </a>
                        </li>
                        <li>
                          <a>
                            <NavLink to="/offer">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              Deals & Offers
                            </NavLink>
                          </a>
                        </li>
                        <li>
                          <a>
                            <NavLink to="/">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                              Home
                            </NavLink>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Terms & conditions
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Feed Back
                          </a>
                        </li>
                        {/* <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Help Desk</a></li> */}
                        <li>
                          <a id="login" href="/" onClick={logoutHandler}>
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="language-menu">
                      <a
                        href=""
                        className="current-lang"
                        onClick={(e) => {
                          e.preventDefault();
                          setopensignin(true);
                        }}
                      >
                        <img
                          src="assets/img/avatar.jpg"
                          style={{ height: "40px", borderRadius: "50%" }}
                          alt="avatar"
                        />
                        <span style={{ padding: "0px 10px" }}>Login</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="container">
              <div className="header-info">
                <div className="header-info-inner">
                  <div className="header-collect book-md">
                    <form action="#">
                      <div className="delivery-type">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="delivery"
                          />
                          <label className="form-check-label" for="delivery">
                            Delivery
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="delivery"
                          />
                          <label className="form-check-label" for="pickup">
                            Pick Up
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="shop-cart header-collect"
                    onClick={(e) => {
                      e.preventDefault();
                      setopencart(true);
                    }}
                  >
                    <a id="side-cart" style={{ color: "#fff" }}>
                      <img src="assets/images/icon-basket.png" alt="basket" />(
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                      items
                    </a>
                  </div>
                  {/* <!-- <div className="search-part">
                                                <a href="#"></a>
                                                <div className="search-box">
                                                    <input type="text" name="txt" placeholder="Search">
                                                    <input type="submit" name="submit" value=" ">
                                                </div>
                                            </div> --> */}
                </div>
              </div>
              <div className="menu-icon">
                <a href="#" className="hambarger">
                  <span className="bar-1"></span>
                  <span className="bar-2"></span>
                  <span className="bar-3"></span>
                </a>
              </div>
              {/* <!-- <div className="book-table header-collect book-sm">
                                <a href="#" data-toggle="modal" data-target="#booktable"><img src="images/icon-table.png" alt="">Book a Table</a>
                            </div> --> */}
              <div className="menu-main">
                <ul>
                  <li className="has-child">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink to="/gallery">Gallery</NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li className="has-child">
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
              <div className="logo">
                <NavLink to="/">
                  <img src="assets/img/Logo.png" alt="logo" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- cart popup --> */}
      <div
        className="cart-popup"
        style={{ display: opencart ? "flex" : "none" }}
      >
        <div className="cart-wrap">
          <div className="cart-blog">
            <div
              className="close"
              onClick={(e) => {
                e.preventDefault();
                setopencart(false);
              }}
            >
              <h3 className="close1">X</h3>
            </div>
            {cartItems.map((item) => {
              if (item.qty === 0) {
                removeFromCartHandler(item.product);
              }

              return (
                <div className="cart-item">
                  <div className="cart-item-left">
                    <img
                      src={`http://api.addipoli.primespot.tech${item.image}`}
                      alt=""
                    />
                  </div>
                  <div className="cart-item-right">
                    <h6>{item.name}</h6>
                    <span>&#8377; {item.price}</span>
                  </div>
                  <span
                    className="delete-icon"
                    onClick={() => removeFromCartHandler(item.product)}
                  ></span>
                </div>
              );
            })}
            <div className="subtotal">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <h6>Subtotal :</h6>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <span>
                  &#8377;
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
            <div className="cart-btn">
              <a
                href=""
                onClick={checkoutHandler}
                className="btn-main checkout"
              >
                CHECK OUT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- login popup --> */}

      <div
        className="login-popup"
        style={{ display: opensignin ? "flex" : "none" }}
      >
        <div className="container" id="container">
          <div className="close">
            <h3
              className="close2"
              onClick={() => {
                setopensignin(false);
              }}
            >
              X
            </h3>
          </div>
          <div>
            <form onSubmit={signinHandler}>
              <h1>Sign In</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="social">
                  <i className="fa fa-google"></i>
                </a>
                <a href="#" className="social">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#">Forgot Your Password</a>

              <button type="submit" onClick={() => setopensignin(false)}>
                Sign In
              </button>
              <p>
                Don't have an account?
                <a
                  href="#"
                  id="signup"
                  onClick={() => {
                    setopensignin(false);
                    setopensignup(true);
                  }}
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- signup popup --> */}

      <div
        className="signup-popup"
        style={{ display: opensignup ? "flex" : "none" }}
      >
        <div className="container" id="container">
          <div className="close">
            <h3
              className="close3"
              onClick={() => {
                setopensignup(false);
              }}
            >
              X
            </h3>
          </div>
          <div>
            <form onSubmit={signupHandler}>
              <h1>Create Account</h1>
              {signupError && <Message>{signupError}</Message>}

              {/* <div className="social-container">
                <a href="#" className="social">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="social">
                  <i className="fa fa-google"></i>
                </a>
                <a href="#" className="social">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
              <span>or use your email for registration</span> */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
