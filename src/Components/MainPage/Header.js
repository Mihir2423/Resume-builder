import React from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../Images/logo.png"

export default function Header() {
    const navigate = useNavigate()
    return(
        <div className="header">
            <div className="left_header">
                <span> <img onClick={()=> navigate("/")} src={logo} alt="logo" /></span>
                <p>resume.io</p>
            </div>
            <div className="right_header">
            </div>
        </div>
    )
}