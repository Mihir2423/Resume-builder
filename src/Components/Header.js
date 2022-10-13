import React from "react"
import logo from "../Images/logo.png"

export default function Header() {
    return(
        <div className="header">
            <div className="left_header">
                <span><img src={logo} alt="logo" /></span>
                <p>resume.io</p>
            </div>
            <div className="right_header">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}