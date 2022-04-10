import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../components/formInput/FormInput';
import { signupService } from '../../service/service';
import { toast } from 'react-toastify';
import './signUp.css';

const initialState = {
    userid: "",
    email: "",
    password: ""
}

export const SignUp = () => {
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
        signupService(values)
            .then((res) => {
                console.log(res.data)
                if (res.data.status === 200) {
                    // alert(res.data.message)
                    // window.location.reload()
                    navigate('/signin')
                    toast.success('signup successfully')
                    setValues(initialState)
                } else {
                    // alert(res.data.message)
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
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

                <button className='custom_button'>Sign Up</button>

                <div className='link'>
                    <Link to='/signin'>Already have an account? Signin</Link>

                </div>
            </form>
        </div>
    )
}
