import axios from 'axios';

const API = "http://localhost:4000"

const signupService = (data) => {
    return axios.post(`${API}/api/v1/signup`, data)
}

const signinService = (data) => {
    return axios.post(`${API}/api/v1/signin`, data)
}

const getUsersListService = (token) => {
    return axios.get(`${API}/api/v1/getUsersList`, {
        headers: {
            authorization: token
        }
    })
}

export { API, signupService, signinService, getUsersListService }