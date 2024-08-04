import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BKImage from './Components/BKImage'
import Nav from './Components/Nav'
import Middle from './Components/Middle'
import Footer from './Components/Footer'
import Education from './Components/Education'
import AboutMe from './Components/AboutMe'
import Project from './Components/Project'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Middle></Middle>
    <BKImage></BKImage>
    <Education></Education>
    <Project></Project>
    <AboutMe></AboutMe>
  
 
    </>
  )
}

export default App
