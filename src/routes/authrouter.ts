import express from 'express';

import authorizeCreds from 'handlers/auth';
import { handleError, handleResponse } from 'helpers/response';

export interface IAuthBody {
    username: string,
    password: string,
    message: string
}

const authRouter = express.Router();

authRouter.post('/',async (req, res, next) => {

    const { username, password, message } = req.body as IAuthBody;
    const { err, data } =  await authorizeCreds(username, password);
    
    if(err) handleError(res, err, '500');
    else handleResponse(res, data, message)
    
});

export default authRouter;