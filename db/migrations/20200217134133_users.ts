import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable("users", t => {
        t.uuid("userid").unique();
        t.string("username").unique().notNullable();
        t.string("password").unique().notNullable();
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable("users");
}

