const getPool = require("../../database/getPool");

const selectEntryByDate = async (date) => {
  const pool = getPool();
  const dateLike = `${date}%`;
  const [entries] = await pool.query(
    "SELECT * FROM entries WHERE date LIKE ?",
    [dateLike]
  );

  return entries;
};

module.exports = selectEntryByDate;
