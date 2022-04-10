import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/formInput/FormInput';
import './signUp.css';

export const SignUp = () => {
    const [values, setValues] = useState({
        userid: "",
        email: "",
        password: ""
    });

    const inputs = [
        {
            id: "1",
            name: "userid",
            type: "text",
            placeholder: "User Id",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special characters!",
            label: "User Id",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: "2",
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true
        },
        {
            id: "3",
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
        <div className='signUp'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                {
                    inputs.map(input => (
                        <FormInput key={input.id} value={values[input.name]} {...input} onChange={onChange} />
                    ))
                }

                <button>Sign Up</button>

                <div className='link'>
                    <Link to='/signin'>Already have an account? Signin</Link>

                </div>
            </form>
        </div>
    )
}
