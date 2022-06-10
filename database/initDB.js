require("dotenv").config();
const { DATABASE_NAME } = process.env;
const getPool = require("./getPool");

const initDB = async () => {
  try {
    const pool = getPool();

    console.log("Creating Database...");
    await pool.query(`DROP DATABASE IF EXISTS ${DATABASE_NAME};`);
    await pool.query(`CREATE DATABASE ${DATABASE_NAME};`);
    await pool.query(`USE ${DATABASE_NAME};`);

    console.log("Deleting tables...");
    await pool.query("DROP TABLE IF EXISTS entries;");
    await pool.query("DROP TABLE IF EXISTS users;");
    await pool.query("DROP TABLE IF EXISTS votes;");

    console.log("Creating users table...");
    await pool.query(`
      CREATE TABLE users (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        name VARCHAR(100),
        registrationCode VARCHAR(100)
      );
    `);

    console.log("Creating entries table...");
    await pool.query(`
      CREATE TABLE entries (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        date datetime default now(),
        title VARCHAR(100) NOT NULL,
        description VARCHAR(500) NOT NULL,
        url VARCHAR(500) NOT NULL,
        user_id INT UNSIGNED,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      );
    `);

    console.log("Creating votes table...");
    await pool.query(`
      CREATE TABLE votes (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        vote BOOLEAN,
        entry_id int UNSIGNED,
        user_id int UNSIGNED,
        KEY entry_id (entry_id),
        KEY user_id (user_id),
        FOREIGN KEY (entry_id) REFERENCES entries (id),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      );
    `);

    console.log("¡All done!");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
};

initDB();
