import axios from 'axios';

const API = "http://localhost:4000"

const userData = JSON.parse(localStorage.getItem('userData'))

const authData = {
    headers: {
        authorization: userData && userData.userToken ? `${userData.userToken}` : null
    }
}

const signupService = (data) => {
    return axios.post(`${API}/api/v1/signup`, data)
}

const signinService = (data) => {
    return axios.post(`${API}/api/v1/signin`, data)
}

const getUsersListService = () => {
    console.log(authData)
    if (authData) {
        return axios.get(`${API}/api/v1/getUsersList`, authData)
    }
}

export { API, signupService, signinService, getUsersListService }