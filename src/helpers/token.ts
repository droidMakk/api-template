import jwt from 'jsonwebtoken';

export const token = (data: any, verify: boolean = false): boolean | string => {
    const { SIGNKEY } = process.env;
    if (!verify) return jwt.sign(data, SIGNKEY);
    else {
        try {
            jwt.verify(String(data), SIGNKEY);
            return true;
        } catch (error) {
            return false;
        }
    };
}

export const getTokenData = token => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export const generateToken = (payload: any): string => {
    const key = process.env.SIGNKEY
    return jwt.sign(payload, key);
}

export const verifyToken = (token: string): boolean => {
    const key = process.env.SIGNKEY
    let valid: boolean;

    try {
        const res = jwt.verify(token, key);
        valid = res ? true : false;
    } catch (error) {
        valid = false;
    }
    return valid;
}



export default token