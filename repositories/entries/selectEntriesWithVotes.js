const getPool = require("../../database/getPool");

const selectEntriesWithVotes = async () => {
  const pool = getPool();

  const [entries] = await pool.query(
    "SELECT e.*, COUNT(v.id) votes FROM entries e LEFT JOIN votes v ON e.id = v.entry_id GROUP BY e.id"
  );

  return entries;
};

module.exports = selectEntriesWithVotes;
