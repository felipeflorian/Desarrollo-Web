import React from 'react';
import './register_style.css';

function LogIn(){
    return(<>
        <div className="background_sign">
        <div className="shape_sign"></div>
        <div className="shape_sign"></div>
    </div>
    <form className='form_sign'>
        <h3>Sign Up Here</h3>

        <label className='label_sign'>User</label>
        <input className='input_sign' type="text" placeholder="Username" />

        <label className='label_sign'>Email</label>
        <input className='input_sign' type="text" placeholder="Email" />

        <label className='label_sign'>Password</label>
        <input className='input_sign' type="text" placeholder="Password" />

        <label className='label_sign'>Confirm Password</label>
        <input className='input_sign' type="text" placeholder="Confirm Password" />

        <button className='button_sign'>Sign Up</button>
    </form>
    </>
    );
}

export default LogIn;