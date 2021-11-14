import React from "react";

const ContactScreen = () => {
  return (
    <div>
      <div className="wrapper">
        {/*<!-- Start Main --> */}
        <main>
          <div className="main-part">
            <section className="contact-map">
              <div className="map-outer">
                <div id="map"></div>
              </div>
            </section>
            {/* <!-- Start Contact Part --> */}
            <section className="default-section contact-part home-icon">
              <div className="icon-default">
                <a href="#">
                  <img src="assets/images/scroll-arrow.png" alt="image" />
                </a>
              </div>
              <div className="container">
                <div className="title text-center">
                  <h2 className="text-coffee">Contact Us</h2>
                  <h6 className="heade-xs">
                    We are a second-generation family business established in
                    2020
                  </h6>
                </div>
                <div className="row">
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="contact-blog-row">
                      <div className="contact-icon">
                        <img
                          src="assets/images/location-icon.png"
                          alt="image"
                        />
                      </div>
                      <p>
                        321/171, GIRIAMMAN KOVIL STREET, PEELAMEDU, COIMBATORE.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="contact-blog-row">
                      <div className="contact-icon">
                        <img src="assets/images/cell-icon.png" alt="image" />
                      </div>
                      <p>
                        <a href="tel:0422-3585241">
                          0422-3585241 , +91 80152 56197
                        </a>
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <div className="contact-blog-row">
                      <div className="contact-icon">
                        <img src="assets/images/mail-icon.png" alt="image" />
                      </div>
                      <p>
                        <a href="mailto:radhefoodindustries@gmail.com">
                          radhefoodindustries@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-8 col-sm-8 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <h5 className="text-coffee">Leave us a Message</h5>
                    {/* <p>
                      Aenean massa diam, viverra vitae luctus sed, gravida eget
                      est. Etiam nec ipsum porttitor, consequat libero eu,
                      dignissim eros. Nulla auctor lacinia enim id mollis.
                    </p> */}
                    <form className="form" method="post" name="contact-form">
                      <div className="row">
                        <div className="alert-container"></div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>First Name *</label>
                          <input name="first_name" type="text" required></input>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Last Name *</label>
                          <input name="last_name" type="text" required></input>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Email *</label>
                          <input name="email" type="email" required></input>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <label>Phone Number *</label>
                          <input name="subject" type="text" required></input>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <label>Your Message *</label>
                          <textarea name="message" required></textarea>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <input
                            name="submit"
                            value="SEND MESSAGE"
                            className="btn-black pull-right send_message"
                            type="submit"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="col-md-4 col-sm-4 col-xs-12 wow fadeInDown"
                    data-wow-duration="1000ms"
                    data-wow-delay="300ms"
                  >
                    <h5 className="text-coffee">Opening Hours</h5>
                    <ul className="time-list">
                      <li>
                        <span className="week-name">Monday</span>
                        <span>8.30 AM - 10.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Tuesday</span>
                        <span>8.30 AM - 10.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Wednesday</span>
                        <span>8.30 AM - 10.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Thursday</span>
                        <span>8.30 AM - 10.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Friday</span>
                        <span>8.30 AM - 10.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Saturday</span>
                        <span>8.30 AM - 10.00 PM</span>
                      </li>
                      <li>
                        <span className="week-name">Sunday</span>
                        <span>8.30 AM - 9.00 PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/*<!-- End Contact Part -->*/}
          </div>
        </main>
        {/*<!-- End Main -->*/}
      </div>
    </div>
  );
};

export default ContactScreen;
