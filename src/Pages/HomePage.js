import React from "react"
import About from "../Components/About"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import Features from "../Components/Features"


export default function HomePage() {
    return (
        <>
            <Hero />
            <Features/>
            <About />
            <Footer/>
        </>
    )
}