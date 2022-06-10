const getPool = require("../../database/getPool");

const insertUser = async ({
  email,
  encryptedPassword,
  role,
  name,
  registrationCode,
}) => {
  const pool = getPool();

  const [{ insertId }] = await pool.query(
    "INSERT INTO users (email, password, role, name, registrationCode) VALUES (?, ?, ?, ?, ?)",
    [email, encryptedPassword, role, name, registrationCode]
  );

  return insertId;
};

module.exports = insertUser;
