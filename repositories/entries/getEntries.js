const getPool = require("../../database/getPool");

const getEntries =async ()=>{

    const pool = getPool();

    const [entries] = await pool.query(
      "SELECT * FROM entries"
    );
  
    return entries;
}

module.exports = getEntries;