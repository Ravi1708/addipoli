import React from "react";

const Address = () => {
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
                            <h2>MY ADDRESS</h2>
                            <a href="/">Home</a>
                            <span>Address</span>
                        </div>
                    </div>
                </section>
                {/* <!-- End Breadcrumb Part -->
                <!-- Start term condition --> */}
                <section class="term-condition home-icon">
                    <div class="icon-default">
                        <a href="#"><img src="assets/images/scroll-arrow.png" /></a>
                    </div>
                    <div class="container">
                        <div class="col-md-9 col-sm-8 col-xs-12 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <a href="/addaddress" className="btn-primary-gold btn-medium">Add Address</a>
                            <div className="shop-checkout-left">                                
                                <h2>MANAGE ADDRESS</h2>                                                                      
                                <div className="row">
                                    <div className="col-md-6">                                        
                                        <div className="contact-blog-row">
                                            <div className="col-md-12">                                                
                                                <label className="form-check-label" for="delivery">
                                                    <strong>SivasHome</strong><br/>
                                                    21a Subiramaniya samy Kovil Street <br/>
                                                    Coimabatore 641030<br/>
                                                    Near Landmark
                                                </label>                                                
                                            </div>
                                            <div className="col-md-6">
                                                    <a class="address-cart-btn" href="/editaddress">Edit</a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a class="address-cart-btn-end" href="#">Delete</a>
                                                </div>
                                        </div>                                        
                                    </div>
                                    <div className="col-md-6">                                        
                                        <div className="contact-blog-row">
                                            <div className="col-md-12">                                                
                                                <label className="form-check-label" for="delivery">
                                                    <strong>SivasHome</strong><br/>
                                                    21a Subiramaniya samy Kovil Street <br/>
                                                    Coimabatore 641030<br/>
                                                    Near Landmark
                                                </label>                                                
                                            </div>
                                            <div className="col-md-6">
                                                <a class="address-cart-btn" href="#">Edit</a>
                                            </div>
                                            <div className="col-md-6">
                                                <a class="address-cart-btn-end" href="#">Delete</a>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">                                        
                                        <div className="contact-blog-row">
                                            <div className="col-md-12">                                                
                                                <label className="form-check-label" for="delivery">
                                                    <strong>SivasHome</strong><br/>
                                                    21a Subiramaniya samy Kovil Street <br/>
                                                    Coimabatore 641030<br/>
                                                    Near Landmark
                                                </label>                                                
                                            </div>
                                            <div className="col-md-6">
                                                    <a class="address-cart-btn" href="/editaddress">Edit</a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a class="address-cart-btn-end" href="#">Delete</a>
                                                </div>
                                        </div>                                        
                                    </div>
                                    <div className="col-md-6">                                        
                                        <div className="contact-blog-row">
                                            <div className="col-md-12">                                                
                                                <label className="form-check-label" for="delivery">
                                                    <strong>SivasHome</strong><br/>
                                                    21a Subiramaniya samy Kovil Street <br/>
                                                    Coimabatore 641030<br/>
                                                    Near Landmark
                                                </label>                                                
                                            </div>
                                            <div className="col-md-6">
                                                <a class="address-cart-btn" href="#">Edit</a>
                                            </div>
                                            <div className="col-md-6">
                                                <a class="address-cart-btn-end" href="#">Delete</a>
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
                                    <li className="active"><a href="/address">My Address</a></li>
                                    <li><a href="/history">My Orders</a></li>                                    
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

export default Address;
