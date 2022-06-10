const getPool = require("../../database/getPool");

const checkEntrieById = async (entrieId)=>{

    const pool = getPool();

    const [id] = await pool.query(
        "SELECT * FROM enlaces_web.entries where id = ?",
        [entrieId]
      );
      return id;

}

module.exports = checkEntrieById

