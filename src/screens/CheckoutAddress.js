import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer } from "../components/FormContainer";
import { saveShippingAddress, createAddress } from "../actions/cartActions";
import { CheckoutSteps } from "../components/CheckoutSteps";
import { getUserAddresses } from "../actions/userActions";

const CheckoutAddress = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userAddresses = useSelector((state) => state.userAddresses);
  const { loading, error, addresses } = userAddresses;

  const [name, setname] = useState(userInfo.userName);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [address, setAddress] = useState(shippingAddress.address);
  const [area, setArea] = useState(shippingAddress.area);
  const [pincode, setPincode] = useState(shippingAddress.pincode);
  const [landmark, setLandmark] = useState(shippingAddress.landmark);
  const [shortNote, setShortNote] = useState(shippingAddress.shortNote);
  const [addressOptions, setaddressOptions] = useState(
    shippingAddress.addressOptions
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        name,
        phoneNumber,
        address,
        area,
        pincode,
        landmark,
        shortNote,
        addressOptions,
      })
    );

    dispatch(
      createAddress({
        name,
        phoneNumber,
        address,
        area,
        pincode,
        landmark,
        shortNote,
        addressOptions,
      })
    );
    history.push("/payment");
  };

  // const proceedWithAddress = ({e, address) => {
  //   e.preventDefault();

  //   dispatch(
  //     saveShippingAddress({
  //       name: address.name,
  //       phoneNumber: address.phoneNumber,
  //       address: address.address,
  //       area: address.area,
  //       pincode: address.pincode,
  //       landmark: address.landmark,
  //       shortNote,
  //       addressOptions,
  //     })
  //   );
  //   history.push("/payment");
  // };

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
                    <li className="active">Address</li>
                    <li>Payment Method</li>
                    <li>Order Complete</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-xs-12">
                    <div
                      className="shop-checkout-left"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <h5>Manage Address</h5>
                      {addresses &&
                        addresses.map((address, index) => {
                          return (
                            <>
                              <div className="row">
                                <div
                                  className="col-md-2"
                                  style={{ margin: "10px" }}
                                >
                                  {/* <input
                                    className="form-check-input"
                                    type="radio"
                                    name="delivery"
                                  /> */}
                                </div>
                                <div className="col-md-10">
                                  <label
                                    className="form-check-label"
                                    for="delivery"
                                  >
                                    <strong>{address.name}</strong>
                                    <br />
                                    {address.address}
                                    <br />
                                    {address.area} {address.pincode}
                                    <br />
                                    {address.landmark}
                                    <br />
                                    Mobile Number -{address.phoneNumber}
                                  </label>
                                </div>
                                <div className="col-md-6">
                                  <a class="address-cart-btn" href="#">
                                    Edit
                                  </a>
                                </div>
                                <div className="col-md-6">
                                  <a
                                    class="address-cart-btn-end"
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      dispatch(
                                        saveShippingAddress({
                                          name: address.name,
                                          phoneNumber: address.phoneNumber,
                                          address: address.address,
                                          area: address.area,
                                          pincode: address.pincode,
                                          landmark: address.landmark,
                                          shortNote,
                                          addressOptions,
                                        })
                                      );
                                      history.push("/payment");
                                    }}
                                  >
                                    Proceed
                                  </a>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    className="col-md-8 col-sm-12 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="shop-checkout-left">
                      <h5>Add New Address</h5>
                      <form
                        onSubmit={submitHandler}
                        className="form"
                        method="post"
                        name="contact-form"
                      >
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>Name*</label>
                            <input
                              name=""
                              type="text"
                              value={name}
                              required
                              disabled
                            ></input>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>Phone Number*</label>
                            <input
                              name=""
                              value={phoneNumber}
                              type="text"
                              required
                              disabled
                            ></input>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>House / Flat / Block No.*</label>
                            <input
                              name={address}
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required
                            ></input>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>Apartment / Road / Area*</label>
                            <input
                              name=""
                              type="text"
                              value={area}
                              onChange={(e) => setArea(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>Pincode*</label>
                            <input
                              name=""
                              type="text"
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <label>Near Landmark*</label>
                            <input
                              name=""
                              type="text"
                              value={landmark}
                              onChange={(e) => setLandmark(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <label>Short Note</label>
                            <textarea
                              name="message"
                              value={shortNote}
                              onChange={(e) => setShortNote(e.target.value)}
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="delivery-type">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="delivery"
                                  value="home"
                                  onChange={(e) =>
                                    setaddressOptions(e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  for="delivery"
                                >
                                  Home
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="delivery"
                                  value="work"
                                  onChange={(e) =>
                                    setaddressOptions(e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  for="pickup"
                                >
                                  Work
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="delivery"
                                  value="others"
                                  onChange={(e) =>
                                    setaddressOptions(e.target.value)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  for="pickup"
                                >
                                  Other
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <button
                              className="btn-primary-gold-address btn-medium"
                              type="submit"
                            >
                              submit
                            </button>
                            {/* <input
                              name="submit"
                              className="btn-black pull-right "
                              type="submit"
                            /> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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

export default CheckoutAddress;
