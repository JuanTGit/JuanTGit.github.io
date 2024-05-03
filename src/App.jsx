import AppNavbar from "./components/Navbar"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

function App() {

  return(
    <>
        <AppNavbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/resume" element={<Resume />}/>
            </Routes>
        <Footer />
    </>
  )
}

export default App
