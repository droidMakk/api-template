'use strict'

const env = process.env.NODE_ENV || 'local';
const knexconf = require('../knexfile')[env];
const knex = require('knex')(knexconf);

export default knex;