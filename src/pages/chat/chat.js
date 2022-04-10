import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import UsersListComponent from "../../components/usersListComponent/UsersListComponent";
import UsersChatComponent from '../../components/usersChatComponent/UsersChatComponent';
import io from 'socket.io-client';
import svg from '../../assets/logout.svg';
import { getUsersListService } from '../../service/service';
import './chat.css';

let socket;

export const Chat = () => {
    const navigate = useNavigate();
    const [loadingStatus, setLoadingStatus] = useState(true)
    const [usersList, setUsersList] = useState([])
    const [filteredUsersList, setFilteredUsersList] = useState([])
    const [search, setSearch] = useState("");
    const [chatMsg, setChatMsg] = useState("");
    const [userDetails, setUserDetails] = useState({});
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (!userData) {
            navigate('/signin')
        }
    })

    useEffect(() => {
        setTimeout(() => {
            setLoadingStatus(false)
            getData()
        }, 2000)
        const userData = JSON.parse(localStorage.getItem('userData'))
        setUserDetails(userData)
    }, [])

    useEffect(() => {
        let searchString = search.trim()
        let tempArray;
        if (searchString.length) {
            tempArray = usersList.length ?
                usersList.filter(item => item.userid.toLowerCase().includes(searchString.toLowerCase())
                    || item.email.toLowerCase().includes(searchString.toLowerCase())
                )
                : []
            setFilteredUsersList(tempArray)
        }
    }, [search])

    const getData = () => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData && userData.userToken) {
            getUsersListService(userData.userToken).then(({ data }) => setUsersList(data.data))
        }
    }

    const selectUser = (id) => {
        console.log(id)
        let datas = usersList.find(item => item._id === id)
        setSelectedUser(datas)
    }

    const onChangeChat = (e) => {
        // console.log(e.target.value)
        setChatMsg(e.target.value)
    }

    const chatInputMsg = () => {
        alert(chatMsg)
        console.log(chatMsg)
    }

    const backEndUrl = "http://localhost:4000"

    useEffect(() => {
        socket = io(backEndUrl)
    }, [])

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const logout = () => {
        localStorage.clear();
        navigate('/signin');
    }

    return (
        <div>
            {
                loadingStatus ?
                    <Loading /> :
                    <div className='chatPage'>

                        <h1>MERN Chat App</h1>
                        <h4>(Hi {userDetails?.userid})</h4>
                        <img className="logout" alt="logout" src={svg} height='30' onClick={logout} />

                        <div className='chatPageFull'>
                            <div className='chatPageSide1'>
                                <UsersListComponent
                                    usersList={search.trim().length === 0 ? usersList : filteredUsersList}
                                    onChange={onChange}
                                    search={search}
                                    selectUser={selectUser}
                                />
                            </div>
                            <div className='chatPageSide2'>
                                <UsersChatComponent
                                    selectedUser={selectedUser}
                                    chatMsg={chatMsg}
                                    onChangeChat={onChangeChat}
                                    chatInputMsg={chatInputMsg}
                                />
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}
