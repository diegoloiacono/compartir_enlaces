const getPool = require("../../database/getPool");

const updateEntryById = async ({ title, description, id }) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE entries SET title = ?, description = ? WHERE id = ?",
    [title, description, id]
  );

  return affectedRows;
};

module.exports = updateEntryById;
