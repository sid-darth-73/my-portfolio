import React from "react"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import MainPage from "./components/MainPage"
import About from './components/About'
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
    </main>
  )
}

export default App
