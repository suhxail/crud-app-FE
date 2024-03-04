import axios from "axios";

const baseURL = 'http://localhost:7000/api';

const authInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

const Token = localStorage.getItem('loggedInUser');

const protectedInstance = axios.create({
    baseURL: baseURL,

    headers: {
        'Authoriation': Token
    }
})

export default {
    authInstance,
    protectedInstance
}