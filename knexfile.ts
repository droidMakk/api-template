'use strict'

require('dotenv-safe').config();

const { DB_HOST, DB_NAME, AUTH_DB_USER, AUTH_DB_PASSWORD, DB_PORT } = process.env;

const connection = {
    host: DB_HOST,
    database: DB_NAME,
    user: AUTH_DB_USER,
    password: AUTH_DB_PASSWORD,
    port: DB_PORT,
}

const local = {
    client: 'pg',
    connection,
    migrations: {
        tablename: 'knex_migrations',
        directory: `${__dirname}/db/migrations`
    },
    seeds: {
        directory: `${__dirname}/db/seeds`
    }
}

const dev = {
    client: 'pg',
    connection,
    migrations: {
        tablename: 'knex_migrations',
        directory: `${__dirname}/db/migrations`
    },
    seeds: {
        directory: `${__dirname}/db/seeds`
    }
}

const prod = {
    client: 'postgresql',
    connection,
    pool: { min: 2, max: 10 },
}

module.exports = { local, dev, prod }