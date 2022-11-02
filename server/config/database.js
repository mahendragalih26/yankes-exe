const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yankes",
  password: "admin",
  port: 5432,
});

pool.on("connect", () => {
  console.log("Conected to database!!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
