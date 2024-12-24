import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import MenSection from './Components/MenSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WomenSection from './Components/WomenSection';
import KidSection from './Components/KidSection';
import SaleSection from './Components/SaleSection';
import SNKRSSection from './Components/SNKRSSection';
import NewSection from './Components/NewSection';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Hero/>}/>
      <Route exact path="/MenSection" element={<MenSection/>}/>
      <Route exact path="/WomenSection" element={<WomenSection/>}/>
      <Route exact path="/KidSection" element={<KidSection/>}/>
      <Route exact path="/SaleSection" element={<SaleSection/>}/>
      <Route exact path='/SNKRSSection' element={<SNKRSSection/>}/>
      <Route exact path='/NewSection' element={<NewSection/>}/>
      </Routes>
    </Router>
    </>  
  )
}

export default App
