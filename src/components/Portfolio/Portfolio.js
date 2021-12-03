import React from 'react'

const Portfolio = () => {
    return (
        <>
              <section id="portfolio" class="position-relative padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center wow fadeIn" data-wow-delay="300ms">
                    <div class="heading-title darkcolor wow fadeInUp" data-wow-delay="300ms">
                        <span class="defaultcolor"> Let's Explore Out </span>
                        <h2 class="font-normal darkcolor heading_space_half"> Our Portfolio </h2>
                    </div>
                    <div class="col-md-6 offset-md-3 heading_space_half">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam reiciendis voluptatum.</p>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div id="mosaic-filter" class="cbp-l-filters bottom30 wow fadeIn text-center" data-wow-delay="350ms">
                        <div data-filter="*" class="cbp-filter-item">
                            <span>All</span>
                        </div>
                        <div data-filter=".digital" class="cbp-filter-item">
                            <span>Digital</span>
                        </div>
                        <div data-filter=".design" class="cbp-filter-item">
                            <span>Design</span>
                        </div>
                        <div data-filter=".brand" class="cbp-filter-item">
                            <span>Brand</span>
                        </div>
                        <div data-filter=".graphics" class="cbp-filter-item">
                            <span>Graphics</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div id="grid-mosaic" class="cbp cbp-l-grid-mosaic-flat">
                        {/* <!--Item 1--> */}
                        <div class="cbp-item brand graphics">
                            <img src="images/gallery-5.jpg" alt="" />
                            <div class="gallery-hvr whitecolor">
                                <div class="center-box">
                                    <a href="images/gallery-5.jpg" class="opens" data-fancybox="gallery" title="Zoom In"> <i class="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" class="opens" title="View Details"> <i class="fas fa-link"></i></a>
                                    <h4 class="w-100">Sweet Cup</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 2--> */}
                        <div class="cbp-item brand graphics design">
                            <img src="images/gallery-7.jpg" alt="" />
                            <div class="gallery-hvr whitecolor">
                                <div class="center-box">
                                    <a href="images/gallery-7.jpg" class="opens" data-fancybox="gallery" title="Zoom In"> <i class="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" class="opens" title="View Details"> <i class="fas fa-link"></i></a>
                                    <h4 class="w-100">Minimal Things</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 3--> */}
                        <div class="cbp-item design digital graphics">
                            <img src="images/gallery-11.jpg" alt="" />
                            <div class="gallery-hvr whitecolor">
                                <div class="center-box">
                                    <a href="images/gallery-11.jpg" class="opens" data-fancybox="gallery" title="Zoom In"> <i class="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" class="opens" title="View Details"> <i class="fas fa-link"></i></a>
                                    <h4 class="w-100">Semantic Collection</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 4--> */}
                        <div class="cbp-item brand graphics">
                            <img src="images/gallery-6.jpg" alt="" />
                            <div class="gallery-hvr whitecolor">
                                <div class="center-box">
                                    <a href="images/gallery-6.jpg" class="opens" data-fancybox="gallery" title="Zoom In"> <i class="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" class="opens" title="View Details"> <i class="fas fa-link"></i></a>
                                    <h4 class="w-100">Wall Clock</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 5--> */}
                        <div class="cbp-item graphics design design">
                            <img src="images/gallery-8.jpg" alt="" />
                            <div class="gallery-hvr whitecolor">
                                <div class="center-box">
                                    <a href="images/gallery-8.jpg" class="opens" data-fancybox="gallery" title="Zoom In"> <i class="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" class="opens" title="View Details"> <i class="fas fa-link"></i></a>
                                    <h4 class="w-100">Reading Content</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 6--> */}
                        <div class="cbp-item brand digital design">
                            <img src="images/gallery-9.jpg" alt="" />
                            <div class="gallery-hvr whitecolor">
                                <div class="center-box">
                                    <a href="images/gallery-9.jpg" class="opens" data-fancybox="gallery" title="Zoom In"> <i class="fa fa-search-plus"></i></a>
                                    <a href="javascript:void(0)" class="opens" title="View Details"> <i class="fas fa-link"></i></a>
                                    <h4 class="w-100">Great Objects</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        {/* <!--Load more itema from another html file using ajax--> */}
                        <div id="js-loadMore-mosaic" class="cbp-l-loadMore-button ">
                            <a href="load-more.html" class="cbp-l-loadMore-link border-0 font-13 button gradient-btn whitecolor transition-3" rel="nofollow">
                            <span class="cbp-l-loadMore-defaultText">Load More (<span class="cbp-l-loadMore-loadItems">6</span>)</span>
                            <span class="cbp-l-loadMore-loadingText">Loading <i class="fas fa-spinner fa-spin"></i></span>
                            <span class="cbp-l-loadMore-noMoreLoading d-none">NO MORE WORKS</span>
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
