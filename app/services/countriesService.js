// importing service

import http from './httpService';
import config from '../config.json';

// endPoint

const endPoint = config.apiUrl + '/country';

export const getCountriesData = async () => {
    try {
        const  { data }  = await http.get(endPoint);
        const { field } = data; 
        const { message, data: result } = field;

        if (message === 'success') {
            return result
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

export const addCountry = async (value) => {
    try {
        const  { data }  = await http.post(endPoint, value);
        const { field } = data;
        const { message, data: result } = field;
 
        if (message === 'success') {
            return field;
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

export const deleteCountry = async (id) => {
    console.log(`${endPoint}/${id}`);
    try {
        const  { data }  = await http.delete(`${endPoint}/${id}`);
        const { field } = data;
        const { message, data: result } = field;
 
        if (message === 'success') {
            return message;
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

export const updateCountry = async (value, id) => {
    try {
        const  { data }  = await http.put(`${endPoint}/${id}`, value);
        const { field } = data;
        const { message, data: result } = field;
 
        if (message === 'success') {
            return message;
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