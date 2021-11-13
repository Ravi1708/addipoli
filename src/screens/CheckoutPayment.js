import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import { createOrder } from "../actions/orderActions";

const CheckoutPayment = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [paymentMethod, setPaymentMethod] = useState("Pay online");

  // calculate price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(20);

  cart.taxPrice = addDecimals(Number((0.07 * cart.itemsPrice).toFixed(2)));

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(setPaymentMethod);
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      // eslint-disable-next-line
      history.push(`/ordercompleted/${order.orderId}`);
    }
  }, [history, success]);
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
        payprice: cart.payprice,
        paymentResult: "Unpaid",
        deliveryStatus: "Order Placed",
        orderStatus: "Ongoing",
      })
    );
  };

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
                    <li className="active">Payment Method</li>
                    <li>Order Complete</li>
                  </ul>
                </div>
                <div class="row">
                  <div className="col-lg-7">
                    <div
                      className="shop-cart-list wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      {/* <div class="shop-checkout-box"> */}
                      <div className="cart-total-title">
                        <h5>ADDRESS DETAILS</h5>
                      </div>
                      <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <label className="form-check-label" for="delivery">
                            {shippingAddress.name}
                            {`(${shippingAddress.addressoption})`} <br />
                            <small>
                              {shippingAddress.address}
                              <br />
                              {shippingAddress.area}
                              <br />
                              {shippingAddress.pincode}
                              <br />
                              {shippingAddress.landmark}
                              <br />
                              Mobile Number - {shippingAddress.phoneNumber}
                            </small>
                          </label>
                        </div>
                      </div>
                      <div className="cart-total-title">
                        <h5>PAYMENT METHODS</h5>
                      </div>
                      <div class="row">
                        <div className="col-md-12">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radio"
                              value="Online payment"
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">
                              Pay Online
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              value="Cash on delivery"
                              onChange={(e) => setPaymentMethod(e.target.value)}
                              type="radio"
                              name="radio"
                            />
                            <label className="form-check-label">
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="cart-total wow fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                    >
                      <div className="cart-total-title">
                        <h5>CART TOTALS</h5>
                      </div>
                      <div className="product-cart-total">
                        <small>Total products</small>
                        <span> &#8377; {cart.itemsPrice}</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Coupon Applied</small>
                        <span>&#8377; 00.00</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Delivery Charge</small>
                        <span> &#8377; {cart.shippingPrice}</span>
                      </div>
                      <div className="product-cart-total">
                        <small>Tax</small>
                        <span>&#8377; {cart.taxPrice}</span>
                      </div>
                      <div className="grand-total">
                        <h5>
                          TOTAL <span> &#8377; {cart.totalPrice}</span>
                        </h5>
                      </div>
                      {paymentMethod == "Cash on delivery" ? (
                        <div className="proceed-check">
                          <button
                            onClick={placeOrderHandler}
                            className="btn-primary-gold btn-medium"
                          >
                            Place Order
                          </button>
                        </div>
                      ) : (
                        <div className="proceed-check">
                          <a
                            href="/placeorder"
                            className="btn-primary-gold btn-medium"
                          >
                            Proceed to Pay
                          </a>
                        </div>
                      )}
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

export default CheckoutPayment;
