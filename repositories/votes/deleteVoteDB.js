const getPool = require("../../database/getPool");

const deleteVoteDB = async (entryId, userId) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "DELETE FROM votes WHERE entry_id = ? AND user_id = ?",
    [entryId, userId]
  );

  return affectedRows;
};

module.exports = deleteVoteDB;
