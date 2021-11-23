import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  login,
  loginwithgoogle,
  logout,
  register,
  registerWithGoogle,
} from "../actions/userActions";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";
import GoogleLogin from "react-google-login";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { userLoginWithGoogleReducer } from "../reducers/userReducers";

const Header = ({ location }) => {
  let history = useHistory();
  const [opencart, setopencart] = useState(false);
  const [googlesignup, setGooglesignup] = useState(false);
  const [opensignin, setopensignin] = useState(false);
  const [opensignup, setopensignup] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState();
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [tokenId, settokenId] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error: signinError, userInfo } = userLogin;

  // const userLoginWithGoogle = useSelector((state) => state.userLogin);
  // const {
  //   loading: GoogleSigninLoading,
  //   error: signinErrorGoogle,
  //   userInfo: userInfoGoogle,
  // } = userLoginWithGoogleReducer;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userRegister = useSelector((state) => state.userRegister);
  const { loading: signuploading, error: signupError } = userRegister;
  // const userRegisterWithGoogle = useSelector(
  //   (state) => state.userRegisterWithGoogle
  // );
  // const { loading: signupWithGoogleloading, error: signupWithGoogleError } =
  //   userRegisterWithGoogle;

  //   const redirect = location.search ? location.search.split("=")[1] : "/";

  console.log(userInfo);

  const signinHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const handleLogin = (googleData) => {
    setGooglesignup(true);
    settokenId(googleData.tokenId);
    dispatch(loginwithgoogle(googleData.tokenId));

    // const res = await fetch("/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    // store returned user somehow
  };

  // const signinWithGoogleHandler = (e) => {
  //   e.preventDefault();

  // };

  const handleSignup = (googleData) => {
    setGooglesignup(true);
    settokenId(googleData.tokenId);
    // const res = await fetch("/login", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    // store returned user somehow
  };

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(register(username, phoneNumber, email, password));
  };

  const signupwithgoogleHandler = (e) => {
    e.preventDefault();
    dispatch(registerWithGoogle(tokenId, phoneNumber));
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

  useEffect(() => {
    if (opensignin == true) {
      if (userInfo) {
        setopensignin(false);
      }
    }
    if (opensignup == true) {
      if (userInfo) {
        setopensignup(false);
      }
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      {/* <!-- Start Header --> */}
      <header>
        <div className="header-part header-reduce sticky">
          <div className="header-top">
            <div className="container">
              <div className="header-top-inner">
                <div className="header-top-left">
                  <a className="top-cell" href="tel:0422-3585241">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      class="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span> 0422-3585241 , +91 80152 56197</span>
                  </a>
                </div>
                <div className="header-top-right">
                  <div className="social-top">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100074803072366">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            class="bi bi-facebook"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.instagram.com/addipoli_puttus/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/APuttus">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            class="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
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
                          <a to="/profile">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a href="/address">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            My Address
                          </a>
                        </li>
                        <li>
                          <a href="/history">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            My Order
                          </a>
                        </li>
                        <li>
                          <a to="/track">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                            Track Current Order
                          </a>
                        </li>
                        {/* <li><a to="/offer"><i className="fa fa-angle-right" aria-hidden="true"></i>Deals &amp; Offers</a></li> */}
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
                  {/* <div className="header-collect book-md">
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
                  </div> */}
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
                    <a href="/">Home</a>
                  </li>
                  <li className="has-child">
                    <a href="/about">About Us</a>
                  </li>
                  <li className="has-child">
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li className="has-child">
                    <a href="/blog">Blog</a>
                  </li>
                  <li className="has-child">
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="logo">
                <a href="/">
                  <img src="assets/img/Logo.png" alt="logo" />
                </a>
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
            {cartItems.reduce((acc, item) => acc + item.qty, 0) === 0 ? (
              <img src="assets/images/empty-cart.png" />
            ) : (
              cartItems.map((item) => {
                if (item.qty === 0) {
                  removeFromCartHandler(item.product);
                }

                return (
                  <>
                    <div className="cart-item">
                      <div className="cart-item-left">
                        <img src={`${item.image}`} alt="" />
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
                    <div className="subtotal">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <h6>Subtotal :</h6>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <span>
                          &#8377;
                          {cartItems
                            .reduce(
                              (acc, item) => acc + item.qty * item.price,
                              0
                            )
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
                  </>
                );
              })
            )}
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
              </div> */}
              <GoogleLogin
                // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                clientId="859216769475-103gs96n5kpq7hfh8dbsfp9horvb4bii.apps.googleusercontent.com"
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={"single_host_origin"}
              />
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
              {/* <a href="#">Forgot Your Password</a> */}

              {/* {signinErrorGoogle && <Message>{signinErrorGoogle}</Message>} */}

              {signinError && <Message>{signinError}</Message>}

              <button type="submit">Sign In</button>
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
            <form
              onSubmit={googlesignup ? signupwithgoogleHandler : signupHandler}
            >
              <h1>Create Account</h1>

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
              </div> */}
              <div
                style={{
                  display: googlesignup ? "none" : "unset",
                }}
              >
                <GoogleLogin
                  // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  clientId="859216769475-103gs96n5kpq7hfh8dbsfp9horvb4bii.apps.googleusercontent.com"
                  buttonText="Signup with Google"
                  onSuccess={handleSignup}
                  onFailure={handleSignup}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
              <span style={{ display: googlesignup ? "none" : "unset" }}>
                or use your email for registration
              </span>
              <h5
                style={{
                  display: googlesignup ? "unset" : "none",
                  padding: "30px 0px",
                }}
              >
                Enter Your Mobile Number
              </h5>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                style={{ display: googlesignup ? "none" : "unset" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: googlesignup ? "none" : "unset" }}
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
                style={{ display: googlesignup ? "none" : "unset" }}
              />
              {signupError && <Message>{signupError}</Message>}
              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
