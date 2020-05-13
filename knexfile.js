module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: "localhost",
            user: "root",
            password: "root",
            database: "portfolio"
        }
    },
    staging: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            user: "root",
            password: "root",
            database: "porfolio"
        }
    }
};