import AppNavbar from "./components/Navbar"
import Footer from "./Footer"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

function App() {

  return(
    <>
      <AppNavbar />
      <Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/resume" element={<Resume />}/>
          </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
