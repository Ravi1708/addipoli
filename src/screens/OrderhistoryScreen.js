import React from 'react'

const CheckoutScreen = () => {
    return (
        <div>
            <div className="wrapper">
        {/* <!-- Start Main --> */}
        <main>
            <div className="main-part">
                 {/* <!-- Start Breadcrumb Part --> */}
                 <section className="breadcrumb-part" data-stellar-offset-parent="true" data-stellar-background-ratio="0.5" style={{backgroundImage: "url('assets/images/breadbg1.jpg')"}}>
                    <div className="container">
                        <div className="breadcrumb-inner">
                            <h2>YOUR ORDER HISTORY</h2>
                            <a href="/">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </section>
                {/* <!-- End Breadcrumb Part --> */}
                {/* <!-- Start Menu Part --> */}
                <section className="special-menu bg-skeen home-icon wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="icon-default icon-skeen">
                        <img src="assets/images/icon6.png" alt="icon"/>
                    </div>
                    <div className="container">
                        <div className="build-title" style={{display: "inline-block", width: "100%", textAlign: "center", marginBottom: "40px;",  marginTop: "0px"}}>
                            <h2>Order History</h2>
                            {/* <!-- <h6>The role of a good cook ware in the preparation of a sumptuous meal cannot be over emphasized then one consider white bread</h6> --> */}
                        </div>
                        <div className="menu-wrapper">
                            <div className="portfolioContainer row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="assets/images/img3.png" alt="icon"/>
                                        </span>
                                        <h5>ADDIPOLI PUTTU's<span>$ 15.00</span></h5>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                                        <p>Date : 08/10/2021</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="assets/images/img3.png" alt="icon"/>
                                        </span>
                                        <h5>ADDIPOLI PUTTU's<span>$ 15.00</span></h5>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames</p>
                                        <p>Date : 08/10/2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="float-main">
                        <div className="icon-top-left">
                            <img src="assets/images/icon7.png" alt="icon"/>
                        </div>
                        <div className="icon-bottom-left">
                            <img src="assets/images/icon8.png" alt="icon"/>
                        </div>
                        <div className="icon-top-right">
                            <img src="assets/images/icon9.png" alt="icon"/>
                        </div>
                        <div className="icon-bottom-right">
                            <img src="assets/images/icon10.png" alt="icon"/>
                        </div>
                    </div>
                </section>
                {/* <!-- End Menu Part --> */}
            </div>
        </main>
        {/* <!-- End Main --> */}
    </div>
        </div>
    )
}

export default CheckoutScreen
