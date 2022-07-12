const getPool = require("../../database/getPool");

const selectCheckVote = async (entryId, userId) => {
  const pool = getPool();

  const [[response]] = await pool.query(
    "SELECT EXISTS (SELECT e.*, v.* FROM entries e LEFT JOIN votes v ON e.id = v.entry_id WHERE e.id = ? AND v.user_id = ? GROUP BY e.id ) AS is_voted",
    [entryId, userId]
  );

  return response.is_voted;
};

module.exports = selectCheckVote;
