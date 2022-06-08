const getPool = require("../../database/getPool");

const updateEntryById = async ({ title, url, date, description }) => {
  const pool = getPool();

  const [{ affectedRows }] = await pool.query(
    "UPDATE entries SET title = ?, url = ?, date = ?, description = ? WHERE id = ?",
    [title, url, date, description]
  );

  return affectedRows;
};

module.exports = updateEntryById;
