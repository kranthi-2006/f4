import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Mobiles from './Mobiles'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <h1>CSEC</h1>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/mobiles" element={<Mobiles/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
