const getPool = require("../../database/getPool");

const selectEntryByDate = async (date) => {
  const pool = getPool();

  const [[entry]] = await pool.query("SELECT * FROM entries WHERE date = ?", [
    date,
  ]);

  return entry;
};

module.exports = selectEntryByDate;
