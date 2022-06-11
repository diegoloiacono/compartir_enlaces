const getPool = require("../../database/getPool");

const selectEntries = async () => {
  const pool = getPool();

  let query = "SELECT * FROM entries";

  const [entries] = await pool.query(query);

  return entries;
};

module.exports = selectEntries;
