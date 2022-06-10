const getPool = require("../../database/getPool");

const insertEntry = async ({ title, url, description, userId }) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO entries (title, url,  description, user_id) VALUES (?, ?, ?, ?)",
    [title, url,  description, userId]
  );

  return insertId;
};

module.exports = insertEntry;
