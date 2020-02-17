import express, { Request, Response } from 'express';
import morgan from 'morgan';

import logger from 'middleware/logger';
import authRouter from 'routes/authrouter';

import useGraphile from './postgraphile';

// LOADING CONFIGS
require('dotenv-safe').config();

const app = express();
app["logger"] = logger;
const port: any = process.env.PORT || 8000;

const reqHandler = (req: Request, res: Response) => {
    res.send('RECIEVED');
}

if (process.env.ENV === "dev") {
    const morganConfig = ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms";
    app.use(morgan(morganConfig));
} else {
    app.use(morgan("tiny"))
}

app.use(useGraphile());

app.get('/', reqHandler);

server.listen(port, () => {
    const message = [
        ['Socket is Active'],
        ['ENV', process.env.NODE_ENV],
        ['PORT', port],
    ]

    console.table(message);
});