const getPool = require("../../database/getPool");

const checkEntrieById = async (entrieId)=>{

    const pool = getPool();

    const [id] = await pool.query(
        "SELECT * FROM enlaces_web.entries where id = ?",
        [entrieId]
      );
        // console.log(id)
      return id;

}

module.exports = checkEntrieById

