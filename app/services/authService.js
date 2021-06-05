// importing service

import http from './httpService'
import config from '../config.json';

// endPoint

const endPoint = config.apiUrl + '/auth';

const STORAGE = 'storage';

// login function 

export const login = async (user) => {
    try {
        const { data } = await http.post(endPoint, {
            email: user.email,
            password: user.password,
            type: 'Admin'
        })
        const { field } = data;
        const { message } = field;

        if (message == 'success') {
            return localStorage.setItem(STORAGE, JSON.stringify(field));
        }
        else {
            alert(message)
        }

    } catch (ex) {
        console.log('loginException', ex)
        if (ex.response && ex.response.status === 400) {
            const errors = {};
            errors.username = ex.response.data;
            alert(errors);
        }
    }
} 

export const getToken = () => {
    try {
        const { token } = JSON.parse(localStorage.getItem(STORAGE));
        return token
    }
    catch (ex) {
        return null
    }
}

export const logout = () => localStorage.removeItem(STORAGE)


export const getStorage = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE));
    }
    catch {
        return null
    }
}
