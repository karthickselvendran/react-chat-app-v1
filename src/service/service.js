import axios from 'axios';

const API = "http://localhost:4000"

const signupService = (data) => {
    console.log(data)
    return axios.post(`${API}/api/v1/signup`, data)
}

const signinService = (data) => {
    console.log(data)
    return axios.post(`${API}/api/v1/signin`, data)
}

export { API, signupService, signinService }