const {deleteVoteDB} = require('../../repositories/votes')

const deleteVote =async (req,res,next)=>{
    try {
        const {id} = req.body;

        const affectedRows = await deleteVoteDB(id);
        if (affectedRows !== 0) {
            // res.status(400).send({status: "bad request", message: 'entrie id not found'})
            res.status(202).send({ status: "ok", message: "Vote deleted" });
        }
        res.status(400).send({status:'bad request', message: 'vote not found'})
        next({status: "bad request", message: 'vote id not found'})

    } catch (e) {
        next(e)
    }

}


module.exports = deleteVote;