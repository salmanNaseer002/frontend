// importing service
import http from './httpService';
import config from '../config.json';

// endPoint
const endPoint = config.apiUrl + '/sales-rep';

export const getSalesRepData = async () => {
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

