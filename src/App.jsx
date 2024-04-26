import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <>
        <Header />
        <Card firstName="Juan" lastName="Tejeda" career="Software Engineer" isEmployed={false}/>
        <Card firstName="Sherley" lastName="Ly" career="Registered Nurse" isEmployed={true}/>
        <Footer />
    </>
  )
}

export default App
