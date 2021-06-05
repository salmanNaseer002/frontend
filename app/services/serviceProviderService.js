// importing service

import http from './httpService';
import config from '../config.json';

// endPoint

const endPoint = config.apiUrl + '/service-provider-packages/all-record';

export const getServiceData = async ( id ) =>
{
    try
    {
        console.log( "line 14 srvice", id );
        const { data } = await http.post( endPoint, {

            serviceProviderId: id
        } );
        const { field } = data;
        const { message, data: result } = field;
        console.log( result );
        if ( message === 'success' )
        {
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

