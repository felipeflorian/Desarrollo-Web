import React from 'react';
import {Link} from 'react-router-dom';
import './beg_style.css'

function Nav(){
    return(<>
            <div className="sidebar_beg">
                <h2>GAMER MATCH</h2>
                <nav>
                <ul>
                    <li><Link to="/beginning">Beginning</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/top">Top Games and Players</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                </nav>
            </div>
           
        </>
    );
}

export default Nav;