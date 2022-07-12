const getPool = require("../../database/getPool");

const selectEntryByDate = async (date) => {
  const pool = getPool();
  const dateLike = `${date}%`;
  const [entries] = await pool.query(
    "SELECT e.*, COUNT(v.id) votes FROM entries e LEFT JOIN votes v ON e.id = v.entry_id WHERE e.date LIKE ? GROUP BY e.id",
    [dateLike]
  );

  return entries;
};

module.exports = selectEntryByDate;
