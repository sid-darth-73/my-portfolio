import React from "react"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import MainPage from "./components/MainPage"
import About from './components/About'
import Skills from './components/Skills'
function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <main className=" bg-gray-950">
      <MainPage/>
      <About/>
      <Skills/>
    </main>
  )
}

export default App
