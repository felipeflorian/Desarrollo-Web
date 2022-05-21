import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './elements/LogIn';
import SignUp from './elements/SignUp';
import React from 'react';
import Home from './elements/Home';
import Beginning from './elements/Beginning';
import About from './elements/About';
import How from './elements/How';
import Top from './elements/Top';
import Profile from './elements/Profile';
import Change from './elements/Change';


function App() {

  localStorage.setItem('actual', null);
  
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
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/change" element={<Change />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
