import React from 'react'
import Layout from '../Layout'

function About() {
    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>About Us</h1>
                                <ul>
                                    <li><a href="index5.html">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="cv-about-img spacer-top">
                                <img
                                    src="src/assets/images/about.png"
                                    alt="image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="cv-about-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h2>Our Expertise</h2>
                                <ul>
                                    <li>Heart Surgery</li>
                                    <li>Eye Surgery</li>
                                    <li>Brain Hemorrhage</li>
                                    <li>Respiratory problems</li>
                                    <li>Internal Injury</li>
                                    <li>Cancer disease</li>
                                    <li>Neurologist</li>
                                    <li>Heart Surgery</li>
                                    <li>Eye Surgery</li>
                                    <li>Brain Hemorrhage</li>
                                    <li>Dental Problem</li>
                                    <li>Respiratory problems</li>
                                    <li>Internal Injury</li>
                                    <li>Cancer disease</li>
                                    <li>Neurologist</li>
                                    <li>Dental Problem</li>
                                </ul>
                                <div className="cv-dr-box">
                                    <div className="cv-dr-name">
                                        <h3>Dr. Martin Guptil</h3>
                                        <p>Heart Surgeon</p>
                                    </div>
                                    <div className="cv-dr-signature">
                                        <img
                                            src="src/assets/images/signature.png"
                                            alt="image"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv-team spacer-top-less">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Our team</h1>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team1.jpg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>John Marsh</h2>
                                    <p>Heart Surgeon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team2.jpg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>Nancy Martin</h2>
                                    <p>Neurologist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team3.jpg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>Martin Guptil</h2>
                                    <p>Eye Specialist</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="cv-team-box">
                                <div className="cv-team-img">
                                    <img
                                        src="src/assets/images/team4.jpg"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cv-team-text">
                                    <h2>Nikki Johnson</h2>
                                    <p>Neurologist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About