import FB from './images/facebook.png';
import IG from './images/instagram.png';
import TW from './images/twitch.png';
import './App.css';
import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
    let navigate = useNavigate();
    const handleLog = () =>{
      navigate("/logIn");
    }

    const handleSign = () =>{
        navigate("signUp");
    }
  
    return (<>
    <div class="wrapper_home">
        <div className="box_home">
            <div className="shape_home"></div>
            <div className="shape_home"></div>
            <form>
            <button onClick={handleLog}>Log In</button>
            <button onClick={handleSign}>Sign Up</button>
            </form>
            <div className="social">
                <div className="fb">
                    <input type="image" src={FB} />
                </div>
                <div className="ig">
                    <input type="image" src={IG} />
                </div>
                <div className="twitch">
                    <input type="image" src={TW} />
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Home;
