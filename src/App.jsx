import AppNavbar from "./Navbar"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"
import About from "./pages/about"

function App() {

  return(
    <>
        <AppNavbar />
         <Routes>
            <Route path="/about" element={<About />}/>
         </Routes>
        <Footer />
    </>
  )
}

export default App
