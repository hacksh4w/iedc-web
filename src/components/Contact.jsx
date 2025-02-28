import React from "react";
import "../index.css";

const Contact = () => {
    return (
        <div id="top_margin" style={{ backgroundColor: "#122B42" }}>
            <section className="main_img center">
                <div
                    className="row"
                    style={{ marginBottom: "0px", backgroundColor: "#122B42", color: "white" }}
                    id="centre_mobile"
                >
                    <div className="col s12 m12 l12 margin_top_mobile" id="contact">
                        <h4 id="bottom_margin">Follow Us</h4>
                        <div className="col s12 m12 l12" id="icons">
                            <div id="icon_space" >
                                <a
                                    href="https://twitter.com/iedc_mec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "white" }}
                                    aria-label="twitter"
                                    
                                >
                                    <i className="fab circle fa-twitter fa-2x" />
                                </a>
                                <a
                                    href="http://linkedin.com/company/iedcmec"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "white" }}
                                    aria-label="linkedin"
                               
                                >
                                    <i className="fab circle fa-linkedin fa-2x" />
                                </a>
                                <a
                                    href="https://www.instagram.com/iedcmec/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "white" }}
                                    aria-label="instagram"
                        
                                >
                                    <i className="fab circle fa-instagram fa-2x" />
                                </a>
                            </div>
                        </div>
                        <div
                            style={{
                                paddingTop: "3rem",
                                paddingBottom: "3rem",
                                paddingLeft: "5px",
                            }}
                        >
                            <h4>Contact</h4>
                            <h6>iedc@mec.ac.in</h6>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
