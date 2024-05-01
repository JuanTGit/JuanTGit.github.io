import AppNavbar from "./Navbar"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"
import About from "./components/About"
import Home from "./components/Home"
import background  from './assets/background.jpg'

function App() {

  return(
    <>
        <AppNavbar />
            <Routes>
                <Route path="/about" element={<About />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        <Footer />
    </>
  )
}

export default App
