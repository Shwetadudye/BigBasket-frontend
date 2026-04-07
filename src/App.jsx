import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home_Page from './Pages/Home_Page' 
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home_Page/>
       <Footer/>
    </>
  )
}

