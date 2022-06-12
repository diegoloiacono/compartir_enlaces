

const getPool = require("../../database/getPool");

const getAllVotes = async ()=>{
    const pool = getPool()

    const [ allVotes ] = await pool.query(
        'SELECT * FROM enlaces_web.votes'
      );
      console.log(allVotes)
    
      return allVotes;
}
module.exports = getAllVotes;