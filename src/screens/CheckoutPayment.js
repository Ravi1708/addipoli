import React from 'react'

const CheckoutPayment = () => {
    return (
        <div>
             <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
            <div className="main-part">
                 {/*<!-- Start Breadcrumb Part -->*/}
                 <section className="breadcrumb-part" data-stellar-offset-parent="true" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('assets/images/breadbg1.jpg')"}}>
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
                        <img src="assets/images/scroll-arrow.png" alt="image"/>
                    </div>
                    <div className="container">
                        <div className="checkout-wrap checkout-wrap-more wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <ul className="checkout-bar">
                                <li className="done-proceed">Login</li>
                                <li className="done-proceed">Address</li>
                                <li className="active">Payment Method</li>                                
                                <li>Order Complete</li>
                            </ul>
                        </div>
                        <div class="row">
                            <div className="col-lg-7">
                                <div className="shop-cart-list wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">                                  
                                    {/* <div class="shop-checkout-box"> */}
                                        <div className="cart-total-title">
                                            <h5>ADDRESS DETAILS</h5>
                                        </div>                               
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-xs-12">                                                
                                                <label className="form-check-label" for="delivery">
                                                    Siva (Home) <br/>
                                                    <small> 21a Subiramaniya samy Kovil Street <br/>
                                                    Coimabatore 641030<br/>
                                                    Near Landmark<br/>
                                                    Mobile Number - 123456789 </small>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="cart-total-title">
                                            <h5>PAYMENT METHODS</h5>
                                        </div> 
                                        <div class="row">
                                            <div className="col-md-12">
                                                <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="radio"/>
                                                    <label className="form-check-label" >Cash on Delivery</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                            <div className="form-check form-check-inline" >
                                                    <input className="form-check-input" type="radio" name="radio"/>
                                                    <label className="form-check-label" >Cash on Delivery</label>
                                                </div>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                </div>        
                            </div>
                            <div className="col-lg-5">
                                <div className="cart-total wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <div className="cart-total-title">
                                        <h5>CART TOTALS</h5>
                                    </div>
                                    <div className="product-cart-total">
                                        <small>Total products</small>
                                        <span>$140.00</span>
                                    </div>
                                    <div className="product-cart-total">
                                        <small>Coupon Applied</small>
                                        <span>$15.00</span>
                                    </div>
                                    <div className="product-cart-total">
                                        <small>Delivery Charge</small>
                                        <span>$15.00</span>
                                    </div>
                                    <div className="product-cart-total">
                                        <small>Tax</small>
                                        <span>$15.00</span>
                                    </div>
                                    <div className="grand-total">
                                        <h5>TOTAL <span>$140.00</span></h5>
                                    </div>
                                    <div className="proceed-check">
                                        <a href="##" className="btn-primary-gold btn-medium">Proceed to Pay</a>
                                    </div>
                                    
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
    )
}

export default CheckoutPayment
