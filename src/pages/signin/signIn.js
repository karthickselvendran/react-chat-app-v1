import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/formInput/FormInput';
import './signIn.css';

export const SignIn = () => {
    const [values, setValues] = useState({
        userid: "",
        email: "",
        password: ""
    });

    const inputs = [
        {
            id: "1",
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true
        },
        {
            id: "2",
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='signIn'>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                {
                    inputs.map(input => (
                        <FormInput key={input.id} value={values[input.name]} {...input} onChange={onChange} />
                    ))
                }

                <button>Sign In</button>

                <div className='link'>
                    <Link to='/signup'>Are you New user? Signup</Link>
                </div>
            </form>
        </div>
    )
}
