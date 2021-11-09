import React from "react";

const AboutScreen = () => {
  return (
    <div>
      <div className="wrapper">
        {/*<!-- Start Main -->*/}
        <main>
          <div className="main-part">
            {/* <!-- Start Breadcrumb Part -->*/}
            <section
              className="breadcrumb-part"
              data-stellar-offset-parent="true"
              data-stellar-background-ratio="0.5"
              style={{backgroundImage: "url('assets/images/breadbg1.jpg')"}}
            >
              <div className="container">
                <div className="breadcrumb-inner">
                  <h2>About Us</h2>
                  <a href="#">Home</a>
                  <span>About Us Style</span>
                </div>
              </div>
            </section>
            {/*<!-- End Breadcrumb Part -->*/}
            {/*<!-- Start Welcome Part -->*/}
            <section
              className="welcome-part home-icon wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="icon-default">
                <a href="#">
                  <img src="assets/images/scroll-arrow.png" alt="image" />
                </a>
              </div>
              <div className="container">
                <div className="build-title">
                  <h2>Welcome To The La Boom</h2>
                  <h6>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h6>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <p>
                      Welcome. This is La Boom. Elegant &amp; sophisticated
                      restaurant template. Royal plate offers different home
                      page layouts with smart and unique design, showcasing
                      beautifully designed elements every restaurant website
                      should have. Smooth animations, fast loading and engaging
                      user experience are just some of , the features this
                      template offers. So, give it a try and dive into a world
                      of La Boom restaurant websites.
                    </p>
                    <p>
                      <img src="assets/images/signature.png" alt="image" />
                    </p>
                    <p>
                      <a href="#" className="btn-black">
                        LEARN MORE
                      </a>
                    </p>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <img src="assets/images/img2.png" alt="image" />
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- End Welcome Part -->*/}
            {/*<!-- Start Food Hours -->*/}
            <section
              className="food-hours banner-bg home-icon wow fadeInDown"
              dataBackground={"assets/images/banner2.jpg"}
              dataWowDuration="1000ms"
              dataWowDelay="300ms"
              style={{backgroundImage: "url('assets/images/banner2.jpg')"}}
            >
              <div className="icon-default icon-gold">
                <img src="assets/images/icon19.png" alt="image" />
              </div>
              <div className="container">
                <div className="food-blog">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon15.png" alt="image" />
                          </div>
                        </div>
                        <h2>Breakfast</h2>
                        <span>8.00 am 10.00 am</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon16.png" alt="image" />
                          </div>
                        </div>
                        <h2>Lunch</h2>
                        <span>1.00 am 2.00 am</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon17.png" alt="image" />
                          </div>
                        </div>
                        <h2>Dinner</h2>
                        <span>7.00 am 9.00 am</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 food-mxs">
                      <div className="food-blog-inner">
                        <div className="food-item">
                          <div className="food-item-inner">
                            <img src="assets/images/icon18.png" alt="image" />
                          </div>
                        </div>
                        <h2>Dessert</h2>
                        <span>All Day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- End Food Hours -->*/}
            {/*<!-- Start Chef -->*/}
            <section
              className="chef-part home-icon home-small-pad wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="icon-default">
                <img src="assets/images/icon11.png" alt="image" />
              </div>
              <div className="container">
                <div className="build-title">
                  <h2>Our Awesome Chef</h2>
                  <h6>Meet Professional Cook Team</h6>
                </div>
                <div
                  className="owl-carousel owl-theme chef-slider"
                  data-items="4"
                  data-laptop="3"
                  data-tablet="2"
                  data-mobile="1"
                  data-nav="true"
                  data-dots="false"
                  data-autoplay="true"
                  data-speed="1800"
                  data-autotime="5000"
                >
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef1.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Anna Taylor</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef2.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Alex Wilson</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef3.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Anita Golden</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef4.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Benderd Dimitor</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef1.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Anna Taylor</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef2.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Alex Wilson</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef3.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Anita Golden</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="chef-blog">
                      <div className="chef-inner">
                        <div className="chef-member">
                          <img src="assets/images/chef4.png" alt="image" />
                        </div>
                        <div className="chef-info">
                          <h5>Benderd Dimitor</h5>
                          <span>Head Chief</span>
                          <div className="social-top">
                            <ul>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-facebook"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-twitter"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-dribbble"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-google"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- End Chef -->*/}
            <section
              className="partner-part text-center pad-top-remove wow fadeInDown"
              data-wow-duration="1000ms"
              data-wow-delay="300ms"
            >
              <div className="container">
                <div
                  className="owl-carousel owl-theme"
                  data-items="5"
                  data-laptop="4"
                  data-tablet="3"
                  data-mobile="1"
                  data-nav="false"
                  data-dots="false"
                  data-autoplay="true"
                  data-speed="1400"
                  data-autotime="3000"
                >
                  <div className="item">
                    <img src="assets/images/partner1.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner2.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner3.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner4.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner5.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner1.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner2.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner3.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner4.png" alt="image" />
                  </div>
                  <div className="item">
                    <img src="assets/images/partner5.png" alt="image" />
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

export default AboutScreen;
