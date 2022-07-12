const getPool = require("../../database/getPool");

const selectVote = async (entryId, userId) => {
  const pool = getPool();

  const [[vote]] = await pool.query(
    "SELECT * FROM votes WHERE entry_id = ? AND user_id = ?",
    [entryId, userId]
  );
  return vote;
};

module.exports = selectVote;
