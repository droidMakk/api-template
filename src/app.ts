import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';

import logger from 'middleware/logger';
import authRouter from 'routes/authrouter';

import useGraphile from './postgraphile';

// LOADING CONFIGS
require('dotenv-safe').config();

const app = express();
app["logger"] = logger;
const port: any = process.env.PORT || 8000;

let loadstring = "tiny";

// LOAD DEV CONFIGS
if (process.env.NODE_ENV === "dev") {
    loadstring = ":remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms";
}

// CONFIGURE MIDDLEWARE
app.use(morgan(loadstring));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.listen(port, () => {
    const message = [
        ['Socket is Active'],
        ['ENV', process.env.NODE_ENV],
        ['PORT', port],
    ]

    console.table(message);
});