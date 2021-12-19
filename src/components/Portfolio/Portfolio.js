import React from 'react'

const Portfolio = () => {
    return (
        <>
              <section id="portfolio" className="position-relative padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center wow fadeIn" data-wow-delay="300ms">
                    <div className="heading-title darkcolor wow fadeInUp" data-wow-delay="300ms">
                        <span className="defaultcolor"> Let's Explore Out </span>
                        <h2 className="font-normal darkcolor heading_space_half"> Our Portfolio </h2>
                    </div>
                    <div className="col-md-6 offset-md-3 heading_space_half">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam reiciendis voluptatum.</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div id="mosaic-filter" className="cbp-l-filters bottom30 wow fadeIn text-center" data-wow-delay="350ms">
                        <div data-filter="*" className="cbp-filter-item">
                            <span>All</span>
                        </div>
                        <div data-filter=".digital" className="cbp-filter-item">
                            <span>Digital</span>
                        </div>
                        <div data-filter=".design" className="cbp-filter-item">
                            <span>Design</span>
                        </div>
                        <div data-filter=".brand" className="cbp-filter-item">
                            <span>Brand</span>
                        </div>
                        <div data-filter=".graphics" className="cbp-filter-item">
                            <span>Graphics</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div id="grid-mosaic" className="cbp cbp-l-grid-mosaic-flat">
                        {/* <!--Item 1--> */}
                        <div className="cbp-item brand graphics">
                            <img src="images/gallery-5.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/gallery-5.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Sweet Cup</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 2--> */}
                        <div className="cbp-item brand graphics design">
                            <img src="images/gallery-7.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/gallery-7.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Minimal Things</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 3--> */}
                        <div className="cbp-item design digital graphics">
                            <img src="images/gallery-11.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/gallery-11.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Semantic Collection</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 4--> */}
                        <div className="cbp-item brand graphics">
                            <img src="images/gallery-6.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/gallery-6.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Wall Clock</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 5--> */}
                        <div className="cbp-item graphics design design">
                            <img src="images/gallery-8.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/gallery-8.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Reading Content</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 6--> */}
                        <div className="cbp-item brand digital design">
                            <img src="images/gallery-9.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/gallery-9.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Great Objects</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {/* <!--Load more itema from another html file using ajax--> */}
                        <div id="js-loadMore-mosaic" className="cbp-l-loadMore-button ">
                            <a href="load-more.html" className="cbp-l-loadMore-link border-0 font-13 button gradient-btn whitecolor transition-3" rel="nofollow">
                            <span className="cbp-l-loadMore-defaultText">Load More (<span className="cbp-l-loadMore-loadItems">6</span>)</span>
                            <span className="cbp-l-loadMore-loadingText">Loading <i className="fas fa-spinner fa-spin"></i></span>
                            <span className="cbp-l-loadMore-noMoreLoading d-none">NO MORE WORKS</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Portfolio
