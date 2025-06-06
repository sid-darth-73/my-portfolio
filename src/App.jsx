import React from "react"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import MainPage from "./components/MainPage"
import About from './components/About'
import Skills from './components/Skills'
import Projects from "./components/Projects"
function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <main className="bg-gray-950">
    <div id="home">
      <MainPage />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="projects">
      <Projects/>
    </div>
  </main>

  )
}

export default App
