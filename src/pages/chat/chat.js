import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

let socket;

export const Chat = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (!userData) {
            console.log(userData)
            navigate('/signin')
        }
    })

    const backEndUrl = "http://localhost:4000"

    useEffect(() => {
        socket = io(backEndUrl)
    }, [])

    return (
        <>
            <h3>Chat page</h3>
        </>
    )
}
