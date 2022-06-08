const getPool = require("../../database/getPool");

const removeEntry = async (id) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "DELETE FROM entries WHERE id = ?",
    [id]
  );

  return affectedRows;
};

module.exports = removeEntry;
