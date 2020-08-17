import db from 'helpers/database';

export const login = async function({username, password}){
    let data = null, error = null;
    try {
        const dbres = await db('users').where('username', username);
        data = dbres;
    } catch (err) {
        err = { message: err.message };
    }
    
    return { data, error }
}