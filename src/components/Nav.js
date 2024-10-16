import React, { useState } from "react";
import { Icon } from "@iconify/react";




const Nav = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); // Toggle the clicked state
    };
    return (
        <div >

            <nav className=" nav">

                <div >
                    <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">Portfolio</a></li>
                        <li><a href="/#">Experience</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>
                </div>



                <div className="nav-mobile" onClick={handleClick}>
                    {clicked ? <Icon width="50px" height="50px" icon="prime:times" /> : <Icon width="50px" height="50px" icon="mdi-light:menu" />}
                </div>
            </nav>

           
        </div>
    )
}

export default Nav