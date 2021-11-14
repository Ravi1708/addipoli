import React from "react";
import { NavLink } from "react-router-dom";

const BlogScreen = () => {
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
              style={{ backgroundImage: "url('/assets/images/breadbg1.jpg')" }}
            >
              <div className="container">
                <div className="breadcrumb-inner">
                  <h2>BLOG</h2>
                  <a href="#">Home</a>
                  <span>Blog</span>
                </div>
              </div>
            </section>
            {/*<!-- End Breadcrumb Part -->*/}
            <section className="home-icon shop-cart bg-skeen">
              <div className="icon-default icon-skeen">
                <img src="/assets/images/scroll-arrow.png" alt="image" />
              </div>
              <div className="container">
                <div
                  className="track-oder wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="track-oder-inner">
                    <div className="clock-track-icon">
                      <img src="/assets/images/clock-icon.png" alt="image" />
                    </div>
                    <div className="track-status">
                      <h3>Our New Awesome Website is Coming Soon...</h3>
                      <br />
                      <h3>
                        <span>Files yet to Be Loaded Up</span>
                      </h3>
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

export default BlogScreen;
