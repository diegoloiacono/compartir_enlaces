const getPool = require("../../database/getPool");

const checkUserById = async (userId) => {
  const pool = getPool();

  const [[id]] = await pool.query("SELECT * FROM users where id = ?", [userId]);
  return id;
};

module.exports = checkUserById;
