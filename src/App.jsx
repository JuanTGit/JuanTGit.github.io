import Header from "./Header"
import Footer from "./Footer"
import Card from "./components/Card"
import { Routes, Route } from "react-router-dom"
import Count from "./components/StateButton"

function App() {
  return(
    <>
        <Header />
        <Card firstName="Juan" lastName="Tejeda" career="Software Engineer" isEmployed={false}/>
        <Card firstName="Sherley" lastName="Ly" career="Registered Nurse" isEmployed={true}/>
        <Count />
        <Footer />
    </>
  )
}

export default App
