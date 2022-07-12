const getPool = require("../../database/getPool");

const insertVoteDB = async (userId, entrieId) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO votes (user_id,entry_id) VALUES (?, ?)",
    [userId, entrieId]
  );

  return insertId;
};
module.exports = insertVoteDB;
