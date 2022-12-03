import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

//Components

import Preloder from "./Components/MainPage/Preloader";
import HomePage from "./Pages/HomePage";
import ResumePage from "./Pages/ResumePage";
import Template from "./Pages/Template";

import "./assets/css/app.css"
import "./assets/css/bootstrap.min.css"
import "./index.css"
export default function App() {
  const [preloader, setPreloader] = useState(false)
  useEffect(() => {
    setPreloader(false)
    setTimeout(() => {
      setPreloader(false)
    }, 5000);
  }, [])
  return (
    <>
      {preloader === true ? <Preloder /> :
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/template" element={<Template />} />
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}