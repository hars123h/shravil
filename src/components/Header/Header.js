import React from 'react'

const Header = () => {
    return (
        <>
            
        <header class="site-header" id="header">
          <nav class="navbar navbar-expand-lg transparent-bg static-nav">
            <div class="container">
              <a class="navbar-brand" href="index.html">
                <img src="images/logo-transparent.png" alt="logo" class="logo-default" />
                <img src="images/logo.png" alt="logo" class="logo-scrolled" />
              </a>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto ms-xl-auto me-xl-0">
                  <li class="nav-item">
                    <a class="nav-link active pagescroll" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll scrollupto" href="#about">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#pricing">Our Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#portfolio">Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#blog">Our Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--side menu open button--> */}
            <a href="javascript:void(0)" class="d-inline-block sidemenu_btn" id="sidemenu_toggle">
              <span></span> <span></span> <span></span>
            </a>
          </nav>
          {/* <!-- side menu --> */}
          <div class="side-menu opacity-0 gradient-bg">
            <div class="overlay"></div>
            <div class="inner-wrapper">
              <span class="btn-close btn-close-no-padding" id="btn_sideNavClose"><i></i><i></i></span>
              <nav class="side-nav w-100">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link  pagescroll" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll scrollupto" href="#about">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#pricing">Our Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#portfolio">Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#blog">Our Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pagescroll" href="#contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
              <div class="side-footer w-100">
                <ul class="social-icons-simple white top40">
                  <li><a href="javascript:void(0)" class="facebook"><i class="fab fa-facebook-f"></i> </a> </li>
                  <li><a href="javascript:void(0)" class="twitter"><i class="fab fa-twitter"></i> </a> </li>
                  <li><a href="javascript:void(0)" class="insta"><i class="fab fa-instagram"></i> </a> </li>
                </ul>
                <p class="whitecolor">&copy; <span id="year"></span> Trax. Made With Love by ThemesIndustry</p>
              </div>
            </div>
          </div>
          <div id="close_side_menu" class="tooltip"></div>
          {/* <!-- End side menu --> */}
        </header>
        </>
    )
}

export default Header
