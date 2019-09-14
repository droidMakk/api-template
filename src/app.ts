import express from 'express';
import { Request, Response } from "express";
import morgan from 'morgan';
import useGraphile from './postgraphile';


// LOADING CONFIGS
require('dotenv-safe').config();

const app = express();
const port:any = process.env.PORT || 8000;

const reqHandler = (req: Request, res: Response) => {
    res.send('RECIEVED');
}

if (process.env.ENV === "dev") {
    const morganConfig = ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms";
    app.use(morgan(morganConfig));
}

if (process.env.ENV === "prod") {
    app.use(morgan("tiny"))
}

app.use(useGraphile());

app.get('/', reqHandler);

app.listen(port, () => {
    const message = [
        ['ENV', process.env.ENV],
        ['PORT', port],
    ]

    console.table(message);
});