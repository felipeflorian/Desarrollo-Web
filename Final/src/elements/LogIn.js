import React from 'react';
import './logIn_style.css';
import {useNavigate} from 'react-router-dom';

function LogIn(){
    let navigate = useNavigate();
    const log = () =>{
        navigate("/beginning");
    }

    return(<>
        <div className="background_log">
        <div className="shape_log"></div>
        <div className="shape_log"></div>
    </div>
    <form className='form_log'>
        <h3>Login Here</h3>

        <label className="label_log">User</label>
        <input className="input_log" type="text" placeholder="Email" />

        <label className="label_log">Password</label>
        <input className="input_log" type="text" placeholder="Password" />

        <button className='button_log' onClick={log}>Log In</button>
    </form>
    </>
    );
}

export default LogIn;