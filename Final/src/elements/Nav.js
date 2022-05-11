import React from 'react';
import {Link} from 'react-router-dom';
import './beg_style.css'

function Nav(){
    return(<>
            <div className="wrapper_beg">
            <div className="sidebar_beg">
                <h2>GAMER MATCH</h2>
                <nav>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/howWorks">How It Works</Link></li>
                    <li><Link to="/top">Top Games and Gamers</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
                </nav>
            </div>
            </div>
        </>
    );
}

export default Nav;