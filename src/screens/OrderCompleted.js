import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { CheckoutSteps } from "../components/CheckoutSteps";
import { Link } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";
import { LinkContainer } from "react-router-bootstrap";

const OrderCompleted = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  return (
    <div>
      <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
          <div className="main-part">
            {/*<!-- Start Breadcrumb Part -->*/}
            <section
              className="breadcrumb-part"
              data-stellar-offset-parent="true"
              data-stellar-background-ratio="0.5"
              style={{ backgroundImage: "url('assets/images/breadbg1.jpg')" }}
            >
              <div className="container">
                <div className="breadcrumb-inner">
                  <h2>Checkout</h2>
                  <a href="/index">Home</a>
                  <span>Checkout</span>
                </div>
              </div>
            </section>
            {/*<!-- End Breadcrumb Part -->*/}
            <section className="home-icon shop-cart bg-skeen">
              <div className="icon-default icon-skeen">
                <img src="assets/images/scroll-arrow.png" alt="image" />
              </div>
              <div className="container">
                <div
                  className="checkout-wrap checkout-wrap-more wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <ul className="checkout-bar">
                    <li className="done-proceed">Login</li>
                    <li className="done-proceed">Address</li>
                    <li className="done-proceed">Payment Method</li>
                    <li className="active done-proceed">Order Complete</li>
                  </ul>
                </div>
                <div class="order-complete-box">
                  <div className="cart-total-title">
                    <h5>THANKS FOR YOUR ORDER !!!</h5>
                    <h5>
                      Order ID - <span>{orderId}</span>
                    </h5>
                  </div>
                  <div class="row">
                    <div class="col-md-8">
                      <div className="title text-center">
                        <h5 className="text-coffee">ORDER DETAILS</h5>
                      </div>
                      <div class="menu-wrapper">
                        <div class="portfolioContainer row">
                          <div class="col-md-12 col-sm-12 col-xs-12 isotope-item breakfast">
                            <div class="menu-list-order">
                              <span class="menu-list-product-order">
                                <img src="assets/images/img3.png" />
                              </span>
                              <h5>
                                Addipoli Puttu <span>$ 15.00</span>
                              </h5>
                            </div>
                          </div>
                          <div class="col-md-12 col-sm-12 col-xs-12 isotope-item lunch">
                            <div class="menu-list-order">
                              <span class="menu-list-product-order">
                                <img src="assets/images/img4.png" />
                              </span>
                              <h5>
                                parotta with curry<span>$ 25.00</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div className="title text-center">
                        <h5 className="text-coffee">SHIPPING ADDRESS</h5>
                      </div>
                      <h6 className="heade-order">
                        <p>
                          Siva (Home) <br />
                          21a Subiramaniya samy Kovil Street <br />
                          Coimabatore 641030
                          <br />
                          Near Landmark
                          <br />
                          Mobile Number - 123456789
                        </p>
                      </h6>
                    </div>
                  </div>
                  <p>
                    Thank you for ordering in our restaurant.
                    <br /> Now check a Food Tracker progress with your order.
                  </p>
                  <LinkContainer to={`/track/${orderId}`}>
                    <div className="btn-medium btn-primary-gold btn-large">
                      Go To Food Tracker
                    </div>
                  </LinkContainer>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/*<!-- End Main -->*/}
      </div>
    </div>
  );
};

export default OrderCompleted;
