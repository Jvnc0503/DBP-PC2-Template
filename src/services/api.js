import axios from 'axios';

//Link to deployed backend
const URL = ""

function saveToken(token){
    localStorage.setItem('token', token);
}

function getToken(){
    return localStorage.getItem('token');
}

export const fetchLogin = async(body) =>{
    const response = await axios.post(`${URL}/auth/login`, body);
    saveToken(response.data.token);
    return response.data;
}

export const fetchRegister = async(body) =>{
    const response = await axios.post(`${URL}/auth/register`, body);
    saveToken(response.data.token);
    return response.data;
}