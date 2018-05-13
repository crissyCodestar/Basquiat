var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/findingbas";
var db = pgp(connectionString);

module.exports = db;
