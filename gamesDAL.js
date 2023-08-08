const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "Rochelle#1563",
  port: "5432",
  database: "ETE-QAP3-DB",
  host: "localhost",
});

async function getallusers() {
  try {
    results = await pool.query("SELECT * FROM useraccount");
  } catch (e) {
    console.error(e);
  }
  return results.rows;
}

async function getusersprogression() {
  pool.query("SELECT * FROM userprogression", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
  });
}

module.exports = { getallusers, getusersprogression };
