import React from "react"
import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'


function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <main className=" bg-gray-950">
      <h1>Hello</h1>
    </main>
  )
}

export default App
