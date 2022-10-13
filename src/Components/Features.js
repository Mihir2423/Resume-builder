import React, { useEffect } from "react"
import featureImg from "../Images/featuresImg.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
export default function Features() {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
        gsap.fromTo(".left-features",{x:-600,opacity:0},
        {scrollTrigger:{
            trigger:".features-section",
            scrub:1,
            end:"+=900",
            toggleActions: "restart pause reverse pause",
        }
        ,x:0, duration:2,opacity:1.1})
        gsap.fromTo(".right-features",{x:600,opacity:0},
        {scrollTrigger:{
            trigger:".features-section",
            scrub:1,
            end:"+=900",
            toggleActions: "restart pause reverse pause",
        }
        ,x:0, duration:2,opacity:1.1})
        gsap.to(".features_section",{
            scrollTrigger:{
                trigger:".about-template",
                end:"+=900",
                scrub:1,
                toggleActions:"restart pause reverse pause"
            },
            filter: "blur(20px)",
            duration:2
        })
        gsap.to(".features_section",{
            scrollTrigger:{
                trigger:".features_section",
                end:"+=900",
                scrub:1,
                toggleActions:"restart pause reverse pause"
            },
            scale:1.1,
            duration:2
        })
    })
    return(
        <div className="features_section">
            <div className="left-features">
                <img src={featureImg} alt="none" />
            </div>
            <div className="right-features">
                <div>
                    <h1>Professional templates</h1>
                    <p>Pick one from our many attractive templates, fill in your skills and experiences and you are all set to go. Our completely customizable designs allow you to change font, colors, layout and images, making it a reflection of you, with great ease.</p>
                </div>
                <div>
                    <h1>Completely secure</h1>
                    <p>Create your resume without any of the usual hassle of signing up and creating an account. We do not save your data and your privacy is absolutely guaranteed.</p>
                </div>
            </div>
        </div>
    )
}