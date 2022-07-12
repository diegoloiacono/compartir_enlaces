const getPool = require("../../database/getPool");

const deleteVoteDB = async (id) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "DELETE FROM votes WHERE id = ?",
    [id]
  );

  return affectedRows;
};

module.exports = deleteVoteDB;
