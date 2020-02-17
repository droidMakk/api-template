import Users from 'models/users';
import db from 'handlers/dbconnect';

export interface IAuthorizeCreds {
    (username: string, password: string):Promise<{
        err: any,
        data: any
    }>
}

const authorizeCreds: IAuthorizeCreds = async function(username, password){
    let err = null, data = null, message = null;
    try {
        
        const dbres = await db<Users>('users').where('username', username);
        console.info('DBRES',dbres);
        data = dbres;
    } catch (error) {
        err = error;
    }
    
    return { err, data, message }
}

authorizeCreds('droidmakk','password');

export default authorizeCreds;