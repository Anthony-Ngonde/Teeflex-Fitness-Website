import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"

import './App.css'

import {slides} from './data/heroData.json'



function App() {


  return (
    <div>
      <Navbar />
       <div className="hero-container">
        <Hero data={slides} />
        <br />
        <About />
        <br />
        <Contact />
      </div>
    </div>
  )
}

export default App
