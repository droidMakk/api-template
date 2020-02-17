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

export default token