import React from 'react'

const Footer = () => {
    return (
        <div>
            
<footer>
    <div className="footer-part wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
        <div className="icon-default icon-dark">
            <img src="assets/img/logo.png" />
        </div>
        <div className="container">
            <div className="footer-inner">
                <div className="footer-info">
                    <h3>Addipoli Puttu's</h3>
                    <p>321/171, GIRIAMMAN KOVIL STREET, PEELAMEDU, COIMBATORE.</p>
                    <p><a>Phone - 0422-3585241 , +91 80152 56197</a></p>
                    <a href="mailto:radhefoodindustries@gmail.com" class="top-email"><span>radhefoodindustries@gmail.com</span></a>
                </div>
            </div>
            <div className="copy-right">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-12 copyright-before"> 
                        <a href="/termsconditions">Terms &amp; Conditions</a> &nbsp;                                
                        <a href="/policy">Privacy Policy</a>  
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12 copyright-before">
                        <span>All rights Reserved.Copyright © 2021<a> Radhe Food Industries</a> </span>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 copyright-after">
                        <div className="social-round">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>                                
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>                                
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
    )
}

export default Footer
