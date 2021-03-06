const getPool = require("../../database/getPool");

const checkEntrieById = async (entrieId)=>{

    const pool = getPool();

    const [id] = await pool.query(
        "SELECT * FROM entries where id = ?",
        [entrieId]
      );
      return id;

}

module.exports = checkEntrieById

