import React, { useState } from "react";

const LandingPage = () => {
   
    const [activeIndex, setActiveIndex] = useState(null);

   
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="container landing">
            <div>
                <a href="/#">
                    <img
                        className="water-mark-img"
                        src='./images/water_mark.png'
                        alt='...'
                    />
                </a>
            </div>
            <div className="header-div">
                <div className="col-1">
                    <h1>Innovative Solutions Tailored to Your Business Needs</h1>
                    <p> We can partner with your business toprovide a symbiotic relationship and synergy to help you or your business
                        achieve more business growth through strategic financial advisory, investment business and human resource planning
                        and management.</p>
                    <button>
                        Get in touch
                    </button>
                    <div className="link-div">
                        <a href="/#"
                            className="link-img"
                        >
                            <img
                                src="./images/be.png"
                                alt=""
                                className="image"
                            />
                        </a>
                        <a href="/#"
                            className="link-img"
                        >
                            <img
                                src="./images/fb.png"
                                alt=""
                                className="image-fb"
                            />
                        </a>
                        <a href="/#"
                            className="link-img"
                        >
                            <img
                                src="./images/brow.png"
                                alt=""
                                className="image"
                            />
                        </a>
                    </div>
                </div>
                <div className="col-2">
                    <div
                        className="vector-div"
                    >
                        {/* Background Image */}
                        <img
                            src="./images/vector.png"
                            alt="Background"
                            className="vector-img"
                        />

                        {/* Foreground Image */}
                        <img
                            src="./images/rectangle_92.png"
                            alt="Foreground"
                            className="rectangle92-img"
                        />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "100px" }}>
                <div className="about-header">
                    <h2>About Us</h2>
                    <div className="down-border"></div>
                </div>
                <div className="about-row">
                    <div className="">
                        <div className="rectangle-div-16">
                            <img
                                src="./images/Rectangle_16.png"
                                alt="Background"
                                className="rectangle-16"
                            />
                        </div>
                    </div>
                    <div className="about-col">
                        <p style={{ color: "white", fontWeight: "500" }}>We focus on value and excellence</p>
                        <p>We are focused on providing products which deliver demonstrably good value of our clients and
                            end-customers-be that a specific return, outperforming an index or achieving returns at lower risk.
                        </p>
                        <p>Through achieving value for the clients whose assests we manage, efficiently controlling costs, effectiveness
                            and effiency, we deliver value to our shareholders and wider stakeholders.
                        </p>
                        <button>Work with Us</button>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "100px" }}>
                <div className="about-header">
                    <h2>Resume</h2>
                    <div className="down-border"></div>
                </div>
                <div className="resume-row">
                    <div className="resume-div resume-col-1">
                        <div className="space-resume">
                            <h2>2017</h2>
                            <p style={{ fontSize: "22px", margin: "0", color: "white", fontWeight: "600" }}>Louisanna State University</p>
                            <p style={{ margin: "0", fontWeight: "500" }}>Lorem Ipseun</p>
                        </div>
                        <div className="space-resume">
                            <h2>2018</h2>
                            <p style={{ fontSize: "22px", margin: "0", color: "white", fontWeight: "600" }}>Harvard EdX</p>
                            <p style={{ margin: "0", fontWeight: "500" }}>Principles of Design</p>
                        </div>
                    </div>
                    <div className="resume-div resume-col-2" style={{ fontSize: "22px", color: "white", fontWeight: "600" }}>
                        <div className="space-resume">
                            <h2>2019</h2>
                            <p style={{ fontSize: "22px", margin: "0", color: "white", fontWeight: "600" }}>Udacity</p>
                            <p style={{ margin: "0", fontWeight: "500" }}>Product Design</p>
                        </div>
                        <div className="space-resume">
                            <h2>2020</h2>
                            <p style={{ fontSize: "22px", margin: "0", color: "white", fontWeight: "600" }}>Microsoft Partner</p>
                            <p style={{ margin: "0", fontWeight: "500" }}>Platinum</p>
                        </div>
                    </div>
                </div>
            </div >
            <div style={{ marginTop: "100px" }}>
                <div className="about-header">
                    <h2>Portfolio</h2>
                    <div className="down-border"></div>
                </div>
                <div className="portfolio-container">
                    <div className="portfolio-link">
                        <ul className="portfolio-link">
                            {['All', 'Website', 'MobileApp', 'CSS', 'GitHub'].map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    className={activeIndex === index ? 'active' : ''}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="image-grid">
                    <img src="./images/rectangle_26.png" alt="" />
                    <img src="./images/rectangle_27.png" alt="" />
                    <img src="./images/rectangle_28.png" alt="" />
                </div>
            </div>
            <div style={{ marginTop: "100px" }}>
                <div className="about-header">
                    <h2>Get In Touch</h2>
                    <div className="down-border"></div>
                </div>
                <div className="get-touch">
                    <div className="get-div get-mr">
                        <img
                            src="./images/call.png"
                            alt="Background"
                            className="get-img"
                        />
                        <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "0" }}>Call Us</p>
                        <p style={{ margin: "0" }}>+234806749700</p>
                    </div>
                    <div className="get-div">
                        <img
                            src="./images/send.png"
                            alt="Background"
                            className="get-img"
                        />
                        <p style={{ fontSize: "20px", fontWeight: "500", marginBottom: "0" }}>Send Email</p>
                        <p style={{ margin: "0" }}>revent@digital.com</p>
                    </div>
                </div>
                <div>
                    <div className="input-div">
                        <input ></input>
                        <input className="input-1"></input>
                    </div>
                    <input></input>
                    <textarea></textarea>
                </div>
                <button style={{ margin: "30px 0px" }}>Send message</button>
            </div>
        </div>
    )
}

export default LandingPage


