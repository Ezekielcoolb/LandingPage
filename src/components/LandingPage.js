import React from "react";

const LandingPage = () => {
    return (
        <div  className="container">
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
                                alt="Centered Image"
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
                                alt="Centered Image"
                                className="image"
                            />
                        </a>
                    </div>
                </div>
                <div>
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
            <div >
                <div className="about-header">
                    <h2>About Us</h2>
                    <div className="about-border"></div>
                </div>
                <div>
                    <div></div>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                        <button></button>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default LandingPage


