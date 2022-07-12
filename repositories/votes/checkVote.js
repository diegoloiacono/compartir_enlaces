const getPool = require("../../database/getPool");

const checkVote = async (userId, entryId) => {
  const pool = getPool();

  const [[vote]] = await pool.query(
    "SELECT * FROM votes WHERE entry_id = ? AND user_id = ?",
    [entryId, userId]
  );

  return vote ? vote : null;
};

module.exports = checkVote;
