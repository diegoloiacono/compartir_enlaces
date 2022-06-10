const getPool = require("../../database/getPool");

const checkUserById = async (userId)=>{

    const pool = getPool();

    const [id] = await pool.query(
        "SELECT * FROM enlaces_web.users where id = ?",
        [userId]
      );
        // console.log(id)
      return id;

}

module.exports = checkUserById