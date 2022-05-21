import React from 'react';
import './logIn_style.css';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";

function LogIn(){
    const initialValues = {user: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }


    let navigate = useNavigate();
    const log = async (e) =>{
        e.preventDefault();
        let user = formValues.user;
        let password = formValues.password;
        let query = {user, password};
        let result = await fetch(
            'http://localhost:10013/logIn', {
                method: "POST",
                body: JSON.stringify(query),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        //result = await result.json();
        localStorage['actual'] = formValues.user;
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
        <input 
            className="input_log" 
            type="text" 
            placeholder="Username" 
            name="user"
            value={formValues.user}
            onChange={handleChange}
        />

        <label className="label_log">Password</label>
        <input 
            className="input_log" 
            type="password" 
            placeholder="Password" 
            name="password"
            value={formValues.password}
            onChange={handleChange}
        />

        <button className='button_log' onClick={log}>Log In</button>
    </form>
    </>
    );
}

export default LogIn;