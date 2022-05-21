import React from 'react';
import './logIn_style.css';
import {useNavigate} from 'react-router-dom';
import {useState} from "react";

function Change(){
    const initialValues = {new_password: "", confirm_password: ""};
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }


    let navigate = useNavigate();
    const change_ = async (e) =>{
        if(formValues.new_password !== formValues.confirm_password){
            alert('Passwords do not match!!');
        }else{
            let user_ = localStorage.getItem('actual');
            let query = {user: user_, password: formValues.new_password};
            fetch(
                'http://localhost:10013/cambiar',{
                    method: 'POST',
                    body: JSON.stringify(query),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            navigate('/logIn');
        }
    }

    return(<>
            <div className="background_log">
        <div className="shape_log"></div>
        <div className="shape_log"></div>
    </div>
    <form className='form_log'>
        <h3>Change password</h3>

        <label className="label_log">New password</label>
        <input 
            className="input_log" 
            type="password" 
            placeholder="Password" 
            name="new_password"
            value={formValues.new_password}
            onChange={handleChange}
        />

        <label className="label_log">Confirm password</label>
        <input 
            className="input_log" 
            type="password" 
            placeholder="Password" 
            name="confirm_password"
            value={formValues.confirm_password}
            onChange={handleChange}
        />

        <button className='button_log' onClick={change_}>Change password</button>
    </form>
        </>
    );
}

export default Change;