const getPool = require("../../database/getPool");

const selectEntryByDate = async (date) => {
  const pool = getPool();

  const [[entries]] = await pool.query("SELECT * FROM entries WHERE date = ?", [
    date,
  ]);

  return entries;
};

module.exports = selectEntryByDate;
