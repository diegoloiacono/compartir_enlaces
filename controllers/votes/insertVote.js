"use strict"
const {checkEntrieById, checkUserById, insertVoteDB}= require('../../repositories/votes')


const insertVote =async (req,res,next)=>{

    try{
        const {entrieId, userId} = req.body

        
        const entrie =await checkEntrieById(entrieId)
        const user = await checkUserById(userId)
        const entID =entrie[0].id
        const useID =user[0].id

        // console.log(entrie[0].id,user[0].id)
        const data=  await insertVoteDB(entID,useID)

        res.status(200).send({ status: "ok", data: { data } });
        
    } catch(e){
        next(e)
    }
    
  }

  module.exports = insertVote;