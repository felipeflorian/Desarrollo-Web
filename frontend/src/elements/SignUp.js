import React from 'react';
import './register_style.css';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";

function LogIn(){
    const initialValues = {user: "", email: "", password: "", confirm_password: ""};
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    }

    let navigate = useNavigate();
    const register = async (e) =>{
        e.preventDefault();
        if (formValues.password === formValues.confirm_password){
            let user = formValues.user;
            let email = formValues.email;
            let password = formValues.password;
            let query = {user, email, password};
            console.log(query);
            let result = await fetch(
                'http://localhost:10013/signUp', {
                    method: "POST",
                    body: JSON.stringify(query),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            )
            result = await result.json();
            console.warn(result);
            if (result){
                navigate("/beginning");
            }
        }else{
            alert("Passwords do not match");
        }
    }

    return(<>
        <div className="background_sign">
        <div className="shape_sign"></div>
        <div className="shape_sign"></div>
    </div>
    <form className='form_sign'>
        <h3>Sign Up Here</h3>

        <label className='label_sign'>User</label>
        <input 
            className='input_sign' 
            type="text" 
            placeholder="Username" 
            name="user"
            value={formValues.user}
            onChange={handleChange}
        />

        <label className='label_sign'>Email</label>
        <input 
            className='input_sign' 
            type="email" 
            placeholder="Email" 
            name="email"
            value={formValues.email}
            onChange={handleChange}
        />

        <label className='label_sign'>Password</label>
        <input 
            className='input_sign' 
            type="password" 
            placeholder="Password" 
            name="password"
            value={formValues.password}
            onChange={handleChange}
        />

        <label className='label_sign'>Confirm Password</label>
        <input 
            className='input_sign' 
            type="password" 
            placeholder="Confirm Password"
            name="confirm_password"
            value={formValues.confirm_password}
            onChange={handleChange} 
        />

        <button className='button_sign' onClick={register}>Sign Up</button>
    </form>
    </>
    );
}

export default LogIn;