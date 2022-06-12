const {getAllVotes}=require('../../repositories/votes')

const getVotes =async (_,res,next)=>{

    try {

        const data = await getAllVotes();

        res.status(200).send({ status: "ok", data: { data } });
        
    } catch (error) {
        next(error)
    }

}


module.exports = getVotes;