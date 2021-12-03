import React from 'react'
import './Contact.css'


const Contact = () => {
    return (
        <>
            <section id="contact" className="contactSection contactSection-center-bg dtr-py-100" style={{ backgroundImage: "url(/images/shape-3.svg)" }}>

                <div className="container">


                    <div className="row">
                        <h2 className="text-center my-5 pb-5">Contact Us</h2>

                        <div className="col-12 col-md-5">

                            <p className="dtr-tagline color-red">Commonly Asked Questions</p>
                            <h2 className="contactSection-heading">FAQ</h2>


                            {/* <div className="dtr-accordion accordion dtr-mt-30" id="accordion1">


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="accordion1-headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseOne" aria-expanded="false" aria-controls="accordion1-collapseOne"> Why do I need SEO for my business? </button>
                                    </h2>
                                    <div id="accordion1-collapseOne" className="accordion-collapse collapse show" aria-labelledby="accordion1-headingOne" data-bs-parent="#accordion1">
                                        <div className="accordion-body">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="accordion1-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseTwo" aria-expanded="false" aria-controls="accordion1-collapseTwo"> What is meant by 'web presence'? </button>
                                    </h2>
                                    <div id="accordion1-collapseTwo" className="accordion-collapse collapse" aria-labelledby="accordion1-headingTwo" data-bs-parent="#accordion1">
                                        <div className="accordion-body">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="accordion1-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseThree" aria-expanded="false" aria-controls="accordion1-collapseThree"> What is sponsored content? </button>
                                    </h2>
                                    <div id="accordion1-collapseThree" className="accordion-collapse collapse" aria-labelledby="accordion1-headingThree" data-bs-parent="#accordion1">
                                        <div className="accordion-body">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="accordion1-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseFour" aria-expanded="false" aria-controls="accordion1-collapseFour"> What does a digital marketer do? </button>
                                    </h2>
                                    <div id="accordion1-collapseFour" className="accordion-collapse collapse" aria-labelledby="accordion1-headingFour" data-bs-parent="#accordion1">
                                        <div className="accordion-body">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</div>
                                    </div>
                                </div>


                            </div> */}


                        </div>

                        <div className="col-12 col-md-6 offset-md-1 small-device-space">
                            <h4>We’re passionate about helping local businesses to grow online.</h4>
                            <p>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas culpa qui officia deserunt accumsan.</p>
                            <p><a href="#" className="btn btn-outline-danger mt-2 btnFont px-4 me-3"><i class="fas fa-phone-alt  me-2"></i>090 123 4567</a>
                                <a href="#" className="btn btn-danger mt-2 btnFont px-4"><i class="far fa-envelope-open me-2"></i>sales@example.com</a>                                </p>

                            {/* <!-- nested row for offset column starts --> */}
                            <div className="row dtr-mt-100">
                                <div className="col-12 col-lg-8 offset-lg-4">

                                    <div className="dtr-small-box dtr-rounded bg-red">
                                        <h3 className="color-white">Get A Callback</h3>

                                        <form id="contactform" method="post" action="php/contact-form.php">
                                            <fieldset>
                                                <div className="mb-3">

                                                    <input type="text" className="form-control inputBg" placeholder="Name" />

                                                </div>
                                                <div className="mb-3">

                                                    <input type="email" className="form-control inputBg" placeholder="Email" />

                                                </div>
                                                <div className="mb-3">

                                                    <input type="email" className="form-control inputBg" placeholder="Phone" />

                                                </div>

                                                <div className="mb-3">

                                                    <textarea className="form-control inputBg" placeholder="message..." rows="3"></textarea>

                                                </div>

                                                <p>
                                                    <button className="btn btnCustom" type="submit">Request A Callback</button>
                                                </p>
                                                <div id="contactresult"></div>
                                            </fieldset>
                                        </form>


                                       


                                        <p className="text-size-sm color-white dtr-mt-10">*Your information is protected by Skwirel’s <a href="#" className="text-decoration-underline">Privacy Policy</a>.</p>
                                    </div>


                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
