require("dotenv").config();
const bcrypt = require("bcrypt");
const getPool = require("./getPool");

const populateDB = async () => {
  try {
    const pool = getPool();

    console.log("Inserting data in users...");

    await pool.query(
      `INSERT INTO users (email, password, role, name) VALUES 
      ("admin@email.com", ?, "admin", "admin");`,
      [await bcrypt.hash("123456", 10)]
    );

    await pool.query(
      `INSERT INTO entries (title, description, url, user_id) VALUES ("Entry demo", "Entry demo description", "http://www.google.com", "1");`
    );

    console.log("Database populated");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

populateDB();
