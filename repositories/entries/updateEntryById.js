const getPool = require("../../database/getPool");

const updateEntryById = async ({ title, description, url, id }) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE entries SET title = ?, description = ?, url = ? WHERE id = ?",
    [title, description, url, id]
  );

  return affectedRows;
};

module.exports = updateEntryById;
