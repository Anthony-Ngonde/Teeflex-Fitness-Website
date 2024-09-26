import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

import {slides} from './data/heroData.json'


function App() {


  return (
    <div>
      <Navbar />
      <Hero data={slides}/>
    </div>
  )
}

export default App
