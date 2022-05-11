import './beg_style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import How from './How';
import Top from './Top';
import Faq from './Faq';

function Beginning(){
    return(
        <> <Nav/> 
            <Router>
                <Routes>
                    <Route path="/about" exact element={<About />} />
                    <Route path="/howWorks" exact element={<How />} />
                    <Route path="/top" exact element={<Top />} />
                    <Route path="/faq" exact element={<Faq />} />
                </Routes>
            </Router>
        </>
    );
}

export default Beginning;