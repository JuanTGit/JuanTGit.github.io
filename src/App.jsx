import AppNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return(
    <>
      <AppNavbar />
      <Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/resume" element={<Resume />}/>
          </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
