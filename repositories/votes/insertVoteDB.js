const getPool = require("../../database/getPool");

const insertVoteDB = async (userId, entrieId)=>{
    const pool = getPool()

    const [{ insertId }] = await pool.query(
        "INSERT INTO votes (entry_id,user_id) VALUES (?, ?)",
        [entrieId,userId]
      );
    
      return insertId;
}
module.exports = insertVoteDB;