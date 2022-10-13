import React, { useEffect } from "react"
import template_img from "../Images/card1_opened.svg"
import template_img2 from "../Images/card2_opened.svg"
import template_img3 from "../Images/card3_opened.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"


export default function About() {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
        gsap.to(".about-container",{
            scrollTrigger:{
                trigger:".about-container",
                end:"+=900",
                scrub:1,
                toggleActions:"restart pause reverse pause"
            },
            backgroundColor:"white",
            duration:2
        })
        gsap.fromTo(".card1",{x:-500},{
            scrollTrigger:{
                trigger:".about-container",
                end: "+=900",
                scrub:1,
                toggleActions:"restart pause reverse pause"
            },
            x:0,
            duration:1,
            ease:"none"
        })
        gsap.fromTo(".card3",{x:500},{
            scrollTrigger:{
                trigger:".about-container",
                end: "+=900",
                scrub:1,
                toggleActions:"restart pause reverse pause"
            },
            x:0,
            duration:1,
            ease:"none"
        })
        gsap.fromTo(".card2",{y:500},{
            scrollTrigger:{
                trigger:".about-container",
                end: "+=900",
                scrub:1,
                toggleActions:"restart pause reverse pause"
            },
            y:0,
            duration:1,
            ease:"none"
        })
    })
    return (
        <div className="about-container">
            <div className="about-template">
                <div class="card1">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={template_img}/>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3 className="yellow">
                                Choose Your Template!
                            </h3>
                            <p>Take your pick from our beautiful templates that are designed to impress. You can personalize it and give it your own unique touch.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-template">
                <div class="card2">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={template_img2}/>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                Fill in your details
                            </h3>
                            <p>Fill in your skills, previous experiences and educational qualifications.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-template">
                <div class="card3">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={template_img3}/>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                Download pdf
                            </h3>
                            <p>Download the remarkable resume you have created and send it to your potential employers with confidence.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about-details"></div>
            <div className="about-download"></div> */}
        </div >
    )
}