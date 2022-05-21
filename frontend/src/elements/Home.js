import FB from './images/facebook.png';
import IG from './images/instagram.png';
import TW from './images/twitch.png';
import WAR from './images/warzone.png';
import FIFA from './images/fifa.png';
import FORZA from './images/forza.png';
import './App.css';
import React from 'react';
import {useNavigate} from "react-router-dom"

const imgs = [{img: WAR, juego:'WARZONE'}, {img: FIFA, juego: 'FIFA'}, {img: FORZA, juego: 'FORZA'}];
const delay = 2500;

const Home = () => {
    let navigate = useNavigate();
    const handleLog = () =>{
      navigate("/logIn");
    }

    const handleSign = () =>{
        navigate("signUp");
    }

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);
    
    return (<>
    <div class="wrapper_home">
        <div className="logo">
        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgs.map((item, index) => (
          <div
            className="slide"
            key={index}
          >
              <div className="box">
                    <figure>
                        <img src={item.img}></img>
                    </figure>
                </div>
          </div>
        ))}
      </div>
    </div>
        </div>
        <div className="title">
            <h1>GAMER MATCH</h1>
        </div>
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
