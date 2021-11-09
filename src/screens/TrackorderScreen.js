import React from 'react'

const TrackorderScreen = () => {
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
                            <h2>TRACK YOUR ORDER</h2>
                            <a href="/">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </section>
                {/*<!-- End Breadcrumb Part -->*/}
                <section className="home-icon shop-cart bg-skeen">
                    <div className="icon-default icon-skeen">
                        <img src="assets/images/scroll-arrow.png" alt="icon"/>
                    </div>
                    <div className="container">
                        <div className="checkout-wrap checkout-wrap-more wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <ul className="checkout-bar">
                                <li className="done-proceed">Order Placed</li>
                                <li className="done-proceed">Preparing</li>
                                <li className="active">Bake</li>
                                <li>Box</li>
                                <li>Delivery</li>
                            </ul>
                        </div>
                        <div className="track-oder wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                            <div className="track-oder-inner">
                                <div className="clock-track-icon">
                                    <img src="assets/images/clock-icon.png" alt="icon"/>
                                </div>
                                <div className="track-status">
                                    <h3><span>Order Status:</span> <br/> We are now baking your Coffee</h3>
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

export default TrackorderScreen
