import { postgraphile, PostGraphileOptions } from 'postgraphile';
const ConnectionFilterPlugin = require("postgraphile-plugin-connection-filter");
const PostGraphileNestedMutations = require("postgraphile-plugin-nested-mutations");
const PgSimplifyInflectorPlugin = require("@graphile-contrib/pg-simplify-inflector");


function useGraphile() {
    const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
    const is_dev = process.env.NODE_ENV === "dev";
    const db_config = {
        database: DB_NAME,
        host: DB_HOST,
        port: Number(DB_PORT),
        user: DB_USER,
        password: DB_PASSWORD
    }

    let graphile_config: PostGraphileOptions = {
        subscriptions: true,
        ignoreRBAC: false,
        appendPlugins: [
            ConnectionFilterPlugin,
            PostGraphileNestedMutations,
            PgSimplifyInflectorPlugin,
        ]
    }

    if (is_dev) {
        graphile_config["graphiql"] = true
        graphile_config["watchPg"] = true;
        graphile_config["enhanceGraphiql"] = true;
        graphile_config["showErrorStack"] = true;
        graphile_config["extendedErrors"] = [
            "severity",
            "code",
            "detail",
            "hint",
            "position",
            "internalPosition",
            "internalQuery",
            "where",
            "schema",
            "table",
            "column",
            "dataType",
            "constraint",
            "file",
            "line",
            "routine"
        ]
    }

    const graphile = postgraphile(db_config, "public", graphile_config);

    return graphile;
}

export default useGraphile;