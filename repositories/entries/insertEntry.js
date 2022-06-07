const getPool = require("../../database/getPool");

const insertEntry = async ({ title, url, date, description, userId }) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO entries (title, url, date, description, user_id) VALUES (?, ?, ?, ?, ?)",
    [title, url, date, description, userId]
  );

  return insertId;
};

module.exports = insertEntry;
