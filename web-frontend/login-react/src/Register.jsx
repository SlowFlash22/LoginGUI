import React, { useState } from 'react';

export const Register = (props) => {
    const [values, setValues] = useState({
        nme: '',
        email: '',
        pass: '',
        cnfrm: ''
    })

    const handleInput = (e) => {
        setValues({...props.state, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='auth-form-container register'>
            <h2>Register</h2>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input value={props.nme} name='name' id='name' placeholder='Name'/>
                <label htmlFor="email">email</label>
                <input value={props.email} onChange={handleInput} type="email" placeholder="abc@email.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={props.pass} onChange={handleInput} type="password" placeholder="******" id="password" name="password" />
                <label htmlFor="password">Confirm Password</label>
                <input value={props.cnfrm} onChange={handleInput} type="password" placeholder="******" id="password" name="confirm" />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}