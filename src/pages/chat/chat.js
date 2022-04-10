import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import io from 'socket.io-client';
import './chat.css';

let socket;

export const Chat = () => {
    const navigate = useNavigate();
    const [loadingStatus, setLoadingStatus] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoadingStatus(false)
        }, 2000)
    }, [])

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
    console.log(loadingStatus)
    return (
        <div>
            {
                loadingStatus ?
                    <Loading /> :
                    <div className='chatPage'>
                        <div className=''>
                            <h3>Chat page</h3>
                        </div>
                    </div>
            }
        </div>

    )
}
