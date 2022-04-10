import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../components/formInput/FormInput';
import { signinService } from '../../service/service';
import { toast } from 'react-toastify';

const initialState = {
    email: "",
    password: ""
}
export const SignIn = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData && userData.userToken) {
            navigate('/chat')
        }
    })

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

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signinService(values)
            .then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem('userData', JSON.stringify(res.data.userData))
                    setValues(initialState)
                    navigate('/chat')
                    toast.success('signin successfully')
                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
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

                <button className='custom_button'>Sign In</button>

                <div className='link'>
                    <Link to='/signup'>Are you New user? Signup</Link>
                </div>
            </form>
        </div>
    )
}
