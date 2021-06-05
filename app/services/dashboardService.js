// importing service

import http from './httpService';
import config from '../config.json';

// endPoint

const endPoint = config.apiUrl + '/dashboard';

export const getDashboardData = async () =>
{
    try
    {
        console.log( "line 13 service dashboar", config.apiUrl );
        const { data } = await http.get( endPoint );
        const { field } = data;
        const { message, data: result } = field;

        if ( message === 'success' )
        {
            console.log( "line 21", result );
            return result
        }
        else
        {
            alert( message )
        }
    } catch ( ex )
    {
        console.log( 'loginException', ex )
        if ( ex.response && ex.response.status === 400 )
        {
            const errors = {};
            errors.username = ex.response.data;
            alert( errors );
        }
    }
}