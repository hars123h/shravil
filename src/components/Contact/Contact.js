import React from 'react'
import './Contact.css'


const Contact = () => {
    return (
        <>
            <section id="" className="contactSection contactSection-center-bg dtr-py-100" >

                <div className="container">


                    <div className="row">
                        <h2 className="text-center my-3">FAQ</h2>

                       
                        <div className="row dtr-mt-100">
                            <div className="col-12 col-lg-6 ">
                                <div className="dtr-small-box dtr-rounded bg-red">
                                    <h3 className="color-white mb-3">Get A Callback</h3>

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





                                    <p className="text-size-sm color-white dtr-mt-10">*Your information is protected by Sharvil <a href="#" className="text-decoration-underline">Privacy Policy</a>.</p>
                                </div>


                            </div>
                            <div className="col-12 col-lg-6">
                                {/* <div style={{ overflowX: "hidden" }}>
                                    <h4>We’re passionate about helping local businesses to grow online.</h4>
                                    <p>Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas culpa qui officia deserunt accumsan.</p>
                                    <p><a href="#" className="btn btn-outline-success mt-2 btnFont px-4 me-3"><i className="fas fa-phone-alt  me-2"></i>090 123 4567</a>
                                        <a href="#" className="btn btn-success mt-2 btnFont px-4"><i className="far fa-envelope-open me-2"></i>sales@example.com</a>                                </p>

                                    
                                </div> */}
                                <div >

                                    <p className="dtr-tagline color-red">Commonly Asked Questions</p>
                                    {/* <h2 className="contactSection-heading"></h2> */}


                                    <div className="dtr-accordion accordion dtr-mt-30" id="accordion1">


                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </div>
                                        </div>
                                       


                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="accordion1-headingTwoone">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseTwo2" aria-expanded="false" aria-controls="accordion1-collapseTwo2"> What is meant by 'web presence'? </button>
                                            </h2>
                                            <div id="accordion1-collapseTwo2" className="accordion-collapse collapse" aria-labelledby="accordion1-headingTwoone" data-bs-parent="#accordion1">
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
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseThree" aria-expanded="false" aria-controls="accordion1-collapseThree"> What is sponsored content? </button>
                                            </h2>
                                            <div id="accordion1-collapseThree" className="accordion-collapse collapse" aria-labelledby="accordion1-headingThree" data-bs-parent="#accordion1">
                                                <div className="accordion-body">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.</div>
                                            </div>
                                        </div>





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
