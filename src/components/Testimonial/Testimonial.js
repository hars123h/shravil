import React from 'react'

const Testimonial = () => {
    return (
        <>
                <section id="our-testimonial">
        <div className="parallax page-header testimonial-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6 col-md-12 text-center text-lg-end">
                        <div className="heading-title wow fadeInRight padding_testi" data-wow-delay="300ms">
                            <span className="whitecolor">Quisque tellus risus, adipisci</span>
                            <h2 className="whitecolor font-normal">What People Say</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="owl-carousel" id="testimonial-slider">
                {/* <!--item 1--> */}
                <div className="item testi-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center">
                            <div className="testimonial-round d-inline-block">
                                <img src="images/testimonial-5.jpg" alt="" />
                            </div>
                            <h4 className="defaultcolor font-light top15"><a href="#.">John Smith</a></h4>
                            <p>UPWORK, New York</p>
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-start text-center">
                            <p className="bottom15 top90">We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we boast a years and years of service.</p>
                            <span className="d-inline-block test-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                        </div>
                    </div>
                </div>
                {/* <!--item 2--> */}
                <div className="item testi-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center">
                            <div className="testimonial-round d-inline-block">
                                <img src="images/testimonial-2.jpg" alt="" />
                            </div>
                            <h4 className="defaultcolor font-light top15"><a href="#.">Hayden Wood</a></h4>
                            <p>FIVERR, Italy</p>
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-start text-center">
                            <p className="bottom15 top90">Trax’s customer testimonial page is another beauty. Its simple design focuses on videos and standout quotes from customers. This approach is clean, straightforward, text that can be overwhelming and easy to skip.</p>
                            <span className="d-inline-block test-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </span>
                        </div>
                    </div>
                </div>
                {/* <!--item 3--> */}
                <div className="item testi-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center">
                            <div className="testimonial-round d-inline-block">
                                <img src="images/testimonial-3.jpg" alt="" />
                            </div>
                            <h4 className="defaultcolor font-light top15"><a href="#.">Kevin Miller</a></h4>
                            <p>ENVATO, Australia</p>
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-start text-center">
                            <p className="bottom15 top90">Trax is a company that provides tools to help professional event planning and execution, and their customers are very happy folks! The thing I love about their customer testimonial page provides content formats.</p>
                            <span className="d-inline-block test-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                        </div>
                    </div>
                </div>
                {/* <!--item 4--> */}
                <div className="item testi-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center">
                            <div className="testimonial-round d-inline-block">
                                <img src="images/testimonial-4.jpg" alt="" />
                            </div>
                            <h4 className="defaultcolor font-light top15"><a href="#.">Alina Johanson</a></h4>
                            <p>INTEL, Sidney</p>
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-start text-center">
                            <p className="bottom15 top90">Startup Institute is a career accelerator that allows professionals to learn new skills, take their careers in a different direction, and pursue a career they are passionate about that have completed the program.</p>
                            <span className="d-inline-block test-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     
        </>
    )
}

export default Testimonial
