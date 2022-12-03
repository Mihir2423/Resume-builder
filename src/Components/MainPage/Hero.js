import React from "react"
import { useNavigate } from "react-router-dom"
import resume_img from "../../Images/landingImg.svg"

export default function Hero() {
    const navigate = useNavigate()
    return (
        <div className="hero_section">
            <h4 className="hero_title">Online Resume Builder</h4>
            <h3 className="hero_description" >Only 2% of resumes make it past the <br/> first round. Be in the top 2%</h3>
            <div className="hero_main">
                <div className="main-description" >
                    <h1>The ultimate tool for an exceptional resume.</h1>
                    <p>Create nothing but the best with us</p>
                    <div className="create-btn" onClick={()=> navigate("/resume")} >Create Resume</div>
                </div>
                <div className="landingPage_img" >
                    <img src={resume_img} alt="resume"/>
                </div>
            </div>
        </div>
    )
}