const entries = require("../../repositories/entries/getEntries")

const getEntries = async (res,req,next)=>{
    try{
        let data = await entries();
        res.status(200).send({ status: "ok", data: data });
    }catch(e){
        next(e)
    }
};

module.exports = getEntries;