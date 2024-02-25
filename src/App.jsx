import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Contact, Home, ProjectGallery, Custom404 } from './components/Pages';
import MyNav from './components/Navbar/';
import MyFooter from './components/Footer/';
// import Wrapper from './components/Wrapper/';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router basename={'/'}>
      <MyNav /> 
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/catfolio' element={<ProjectGallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/404' element={<Custom404 />} />        
      </Routes>
      </Router> 
      {/* <Wrapper /> */}
      <MyFooter />
    </>
  )
}

export default App;
