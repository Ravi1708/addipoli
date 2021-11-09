import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogScreen = () => {
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
                            <h2>BLOG</h2>
                            <a href="#">Home</a>
                            <span>Blog</span>
                        </div>
                    </div>
                </section>
                {/*<!-- End Breadcrumb Part -->*/}
                <section className="home-icon blog-main-section blog-list-outer">
                    <div className="icon-default">
                        <img src="assets/images/scroll-arrow.png" alt="image"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="blog-left-section" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <div className="blog-left-search blog-common-wide">
                                        <input type="text" name="txt" placeholder="Search"></input>
                                        <input type="submit" name="submit" value="&#xf002;"></input>
                                    </div>
                                    <div className="blog-left-categories blog-common-wide">
                                        <h5>Categories</h5>
                                        <ul className="list">
                                            <li><a href="#">Catering</a></li>
                                            <li><a href="#">Community</a></li>
                                            <li><a href="#">Employment</a></li>
                                            <li><a href="#">Franchise</a></li>
                                            <li><a href="#">Kids Corner</a></li>
                                            <li><a href="#">Our Recipes</a></li>
                                        </ul>
                                    </div>
                                    <div className="blog-recent-post blog-common-wide">
                                        <h5>Recent Posts</h5>
                                        <div className="recent-blog-list">
                                            <p><img src="assets/images/img41.png" alt="image"/></p>
                                            <p><small>October 13, 2017</small></p>
                                            <h6>Disclosue - Real food here</h6>
                                        </div>
                                        <div className="recent-blog-list">
                                            <p><img src="assets/images/img42.png" alt="image"/></p>
                                            <p><small>October 13, 2017</small></p>
                                            <h6>Disclosue - Real food here</h6>
                                        </div>
                                    </div>
                                    <div className="popular-tag blog-common-wide">
                                        <h5>Popular Tags</h5>
                                        <a href="#">Audio</a> <a href="#">Service</a> <a href="#">Cupcake</a> <a href="#">Online Order</a> <a href="#">Contact</a>
                                    </div>
                                    <div className="blog-left-deal blog-common-wide">
                                        <h5>Best Deals</h5>
                                        <div className="best-deal-blog">
                                            <div className="best-deal-left">
                                                <img src="assets/images/img43.png" alt="image"/>
                                            </div>
                                            <div className="best-deal-right">
                                                <p>Lasal Cheese</p>
                                                <p><strong>$ 15</strong></p>
                                            </div>
                                        </div>
                                        <div className="best-deal-blog">
                                            <div className="best-deal-left">
                                                <img src="assets/images/img44.png" alt="image"/>
                                            </div>
                                            <div className="best-deal-right">
                                                <p>Lasal Cheese</p>
                                                <p><strong>$ 15</strong></p>
                                            </div>
                                        </div>
                                        <div className="best-deal-blog">
                                            <div className="best-deal-left">
                                                <img src="assets/images/img45.png" alt="image"/>
                                            </div>
                                            <div className="best-deal-right">
                                                <p>Lasal Cheese</p>
                                                <p><strong>$ 15</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-8 col-xs-12">
                                <div className="blog-right-section">
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/img53.png" alt="image"/>
                                            <div className="date-feature">27
                                                <br/> <small>may</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <span><i className="icon-user"></i> By Ali TUFAN</span>
                                            <span><i className="icon-comment"></i> 5 Comments</span>
                                            <h5>How Do You Like Your Sausage?</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <NavLink to="/blogdetail" className="read-arrow">Read More</NavLink>
                                        </div>
                                    </div>
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/img73.png" alt="image"/>
                                            <div className="date-feature">27
                                                <br/> <small>may</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <span><i className="icon-user"></i> By Ali TUFAN</span>
                                            <span><i className="icon-comment"></i> 5 Comments</span>
                                            <h5>There are many variations of passages</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <NavLink to="/blogdetail" className="read-arrow">Read More</NavLink>
                                        </div>
                                    </div>
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/img74.png" alt="image"/>
                                            <div className="date-feature">27
                                                <br/> <small>may</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <span><i className="icon-user"></i> By Ali TUFAN</span>
                                            <span><i className="icon-comment"></i> 5 Comments</span>
                                            <h5>There are many variations of passages</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <NavLink to="/blogdetail" className="read-arrow">Read More</NavLink>
                                        </div>
                                    </div>
                                    <div className="blog-right-listing wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                                        <div className="feature-img">
                                            <img src="assets/images/img75.png" alt="image"/>
                                            <div className="date-feature">27
                                                <br/> <small>may</small></div>
                                        </div>
                                        <div className="feature-info">
                                            <span><i className="icon-user"></i> By Ali TUFAN</span>
                                            <span><i className="icon-comment"></i> 5 Comments</span>
                                            <h5>How Do You Like Your Sausage?</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque. Quisque id sodales libero. In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit, cursus molestie lectus.</p>
                                            <NavLink to="/blogdetail" className="read-arrow">Read More</NavLink>
                                        </div>
                                    </div>
                                    <div className="gallery-pagination">
                                        <div className="gallery-pagination-inner">
                                            <ul>
                                                <li><a href="#" className="pagination-prev"><i className="icon-left-4"></i> <span>PREV page</span></a></li>
                                                <li className="active"><a href="#"><span>1</span></a></li>
                                                <li><a href="#"><span>2</span></a></li>
                                                <li><a href="#"><span>3</span></a></li>
                                                <li><a href="#" className="pagination-next"><span>next page</span> <i className="icon-right-4"></i></a></li>
                                            </ul>
                                        </div>
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

export default BlogScreen
