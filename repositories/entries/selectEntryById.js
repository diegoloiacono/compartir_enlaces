const getPool = require("../../database/getPool");

const selectEntryById = async (id) => {
  const pool = getPool();

  const [[entry]] = await pool.query("SELECT * FROM entries WHERE id = ?", [
    id,
  ]);

  return entry;
};

module.exports = selectEntryById;
