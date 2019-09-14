import { postgraphile } from 'postgraphile';


function useGraphile() {
    const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
    
    const db_config = {
        database: DB_NAME,
        host: DB_HOST,
        port: Number(DB_PORT),
        user: DB_USER,
        password: DB_PASSWORD
    }

    let graphile_config = {
        graphiql: true,
        subscriptions: true
    }

    if (process.env.ENV === "dev") {
        graphile_config["watchPg"] = true;
        graphile_config["enhanceGraphiql"] = true;
    }

    const graphile = postgraphile(db_config, "public", graphile_config);

    return graphile;
}

export default useGraphile;