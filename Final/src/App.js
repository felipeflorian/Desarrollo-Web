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
          </Routes>
        </Router>
    </>
  );
}

export default App;
