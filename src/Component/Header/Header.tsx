import React from 'react'
import "./header.css";
import Image from 'next/image';


function Header() {
    const icon = "/upload/Images/white-logo-chanel.webp";
    const usericon = "/upload/Images/usericon2.png";

    return (
        <div className='header'>
            <div className="icon">
                <Image className='icons' src={icon} alt="icon" width={100} height={100} />
            </div>
            <div className="menu">
                <ul className="list">
                    <li>Home</li>
                    <li>about</li>
                    <li>serves</li>
                    <li>blog</li>
                    <li>contact-us</li>
                    <li>about</li>
                </ul>
            </div>
            <div className="usericon">
                <Image src={usericon} width={55}
                    height={55} alt='user icon' />
            </div>
        </div>
    )
}

export default Header
