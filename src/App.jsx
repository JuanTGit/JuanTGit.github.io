import AppNavbar from "./Navbar"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"
import About from "./components/About/About"
import Home from "./components/Home/Home"

function App() {

  return(
    <>
        <AppNavbar />
            <Routes>
                <Route path="/about" element={<About />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        <Footer />
    </>
  )
}

export default App
