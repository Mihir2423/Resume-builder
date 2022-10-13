import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Preloder from "./Components/Preloader";
import HomePage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
export default function App() {
  const [preloader, setPreloader] = useState(false)
  useEffect(() => {
    setPreloader(true)
    setTimeout(() => {
      setPreloader(false)
    }, 5000);
  }, [])
  return (
    <>
      {preloader === true ? <Preloder /> :
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}