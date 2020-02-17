import { Response } from 'express';

import logger from 'middleware/logger';
import { messages, status } from './resmessage';

export function handleError(res: Response, error, level){
    const message = status[level]
    res.json({ status: level, message, error });
}

export function handleResponse(res: Response, data, message){
    res.json({ data, message })
}