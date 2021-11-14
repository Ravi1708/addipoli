import React from "react";

const OrderhistoryScreen = () => {
  return (
    <div>
      <div className="wrapper">
        {/* <!-- Start Main --> */}
        <main>
            <div class="main-part">
                {/* <!-- Start Breadcrumb Part --> */}
                <section class="breadcrumb-part" data-stellar-offset-parent="true" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('assets/images/breadbg1.jpg')"}}>
                    <div class="container">
                        <div class="breadcrumb-inner">
                            <h2>YOUR ORDER HISTORY</h2>
                            <a href="/">Home</a>
                            <span>Order History</span>
                        </div>
                    </div>
                </section>
                {/* <!-- End Breadcrumb Part -->
                <!-- Start term condition --> */}
                <section class="term-condition home-icon">
                    <div class="icon-default">
                        <a><img src="assets/images/scroll-arrow.png" /></a>
                    </div>
                    <div class="container">
                        <div class="col-md-9 col-sm-8 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <div className="shop-checkout-left">                                
                                <h2>ORDER HISTORY</h2>                                                                      
                                <div className="row">
                                    <div className="col-md-6">                                        
                                        <div className="contact-blog-row-address">
                                            <div className="col-md-12">                                                
                                                <label className="form-check-label" for="delivery">
                                                    <strong>ORDER-ID : 12345 6789</strong><br/>
                                                    <span>Order Items : Addipoli Puttus</span>
                                                </label>                                                
                                            </div>
                                            <div className="col-md-12"> 
                                            <a class="address-cart-btn-end" href="/viewhistory">View Details</a>
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div className="col-md-6">                                        
                                        <div className="contact-blog-row-address">
                                            <div className="col-md-12">                                                
                                                <label className="form-check-label" for="delivery">
                                                    <strong>ORDER-ID : 12345 6789</strong><br/>
                                                    <span>Order Items : Addipoli Puttus</span>
                                                </label>                                                
                                            </div>
                                            <div className="col-md-12"> 
                                            <a class="address-cart-btn-end" href="/viewhistory">View Details</a>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <div class="terms-right">
                                <ul>
                                    <li ><a href="/profile">My Profile</a></li>
                                    <li ><a href="/address">My Address</a></li>
                                    <li className="active"><a href="/history">My Orders</a></li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end term condition --> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderhistoryScreen;
