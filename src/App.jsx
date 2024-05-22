import AppNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { useState } from "react"

function App() {
  // typeWriter State
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [letter, setLetter] = useState(0);
  const [displayedTexts, setDisplayedTexts] = useState(["", "", ""]);

  return(
    <>
      <AppNavbar />
      <Router>
          <Routes>
              <Route path="/" element={<Home 
                                        currentStringIndex={currentStringIndex}
                                        letter={letter}
                                        displayedTexts={displayedTexts}
                                        setCurrentStringIndex={setCurrentStringIndex}
                                        setLetter={setLetter}
                                        setDisplayedTexts={setDisplayedTexts}/>}/>
              <Route path="contact" element={<Contact />}/>
              <Route path="projects" element={<Projects />}/>
              <Route path="resume" element={<Resume />}/>
          </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
