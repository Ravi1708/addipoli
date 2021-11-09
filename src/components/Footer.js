import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div
          className="footer-part wow fadeInDown"
          data-wow-duration="1000ms"
          data-wow-delay="300ms"
        >
          <div className="icon-default icon-dark">
            <img src="assets/img/Logo.png" alt="logo" />
          </div>
          <div className="container">
            <div className="footer-inner">
              <div className="footer-info">
                <h3>Addipoli Puttu's</h3>
                <p>
                  329 Queensberry Street, North Melbourne VIC 3051, Coimbatore.
                </p>
                <p>
                  <a href="#">123 456 7890</a>
                </p>
                <p>
                  <a href="#">support@addipoli.com</a>
                </p>
              </div>
            </div>
            <div className="copy-right">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 copyright-before">
                  <span>Copyright © 2021 All rights reserved.</span>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 copyright-after">
                  <div className="social-round">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a href="#" className="top-arrow"></a>
    </div>
  );
};

export default Footer;
