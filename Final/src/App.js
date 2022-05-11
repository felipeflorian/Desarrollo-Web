import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './elements/LogIn';
import SignUp from './elements/SignUp';
import React from 'react';
import Home from './elements/Home';
import Beginning from './elements/Beginning';
import About from './elements/About';
import How from './elements/How';
import Top from './elements/Top';
import Faq from './elements/Faq';


function App() {
  
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route exact path="/logIn" element={<LogIn />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/beginning" element={<Beginning />} />   
            <Route exact path="/about" element={<About />} />
            <Route exact path="/howWorks" element={<How />} />
            <Route exact path="/top" element={<Top />} />
            <Route exact path="/faq" element={<Faq />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
