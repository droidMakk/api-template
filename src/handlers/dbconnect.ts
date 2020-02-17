import knex,{ Config } from 'knex';

const {
    DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT
} = process.env;

const knexconf: Config = {
    client: 'pg',
    connection: {
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        port: Number(DB_PORT)
    }
}

export default knex(knexconf);