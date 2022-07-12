const getPool = require("../../database/getPool");

const selectEntriesByUserId = async (userId) => {
  const pool = getPool();

  const [entries] = await pool.query(
    "SELECT e.*, COUNT(v.id) votes FROM entries e LEFT JOIN votes v ON e.id = v.entry_id WHERE e.user_id = ? GROUP BY e.id",
    [userId]
  );

  return entries;
};

module.exports = selectEntriesByUserId;
