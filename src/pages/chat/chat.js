import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import UsersListComponent from "../../components/usersListComponent/UsersListComponent";
import io from 'socket.io-client';
import svg from '../../assets/logout.svg';
import { getUsersListService } from '../../service/service';
import './chat.css';

let socket;

export const Chat = () => {
    const navigate = useNavigate();
    const [loadingStatus, setLoadingStatus] = useState(true)
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoadingStatus(false)
            getData()
        }, 2000)
    }, [])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (!userData) {
            // console.log(userData)
            navigate('/signin')
        }
    })

    const getData = () => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData && userData.userToken) {
            getUsersListService().then(({ data }) => setUsersList(data.data))
        }
    }

    const backEndUrl = "http://localhost:4000"

    useEffect(() => {
        socket = io(backEndUrl)
    }, [])

    const logout = () => {
        localStorage.clear();
        navigate('/signin');
    }
    console.log(usersList)
    return (
        <div>
            {
                loadingStatus ?
                    <Loading /> :
                    <div className='chatPage'>

                        <h1>MERN Chat App</h1>
                        <img className="logout" alt="logout" src={svg} height='30' onClick={logout} />

                        <div className='chatPageFull'>
                            <div className='chatPageSide1'> <UsersListComponent usersList={usersList} /> </div>
                            <div className='chatPageSide2'> </div>
                        </div>
                    </div>
            }
        </div>

    )
}
