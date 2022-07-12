// "use strict";
const {
  checkEntrieById,
  checkUserById,
  insertVoteDB,
  checkVote,
  deleteVoteDB,
} = require("../../repositories/votes");

const insertVote = async (req, res, next) => {
  try {
    const { entrieId, userId } = req.body;

    if (userId == req.auth.id) {
      res.status(400).json({
        status: "bad request",
        message: "you can not vote your entry",
      });
      return;
    }
    const vote = await checkVote(userId, entrieId);
    if (vote) {
      let { id } = vote;
      await deleteVoteDB(id);
      res.json({ message: `delete vote with id: ${id}` });
      return;
    }
    const entrie = await checkEntrieById(entrieId);
    const user = await checkUserById(userId);
    const entID = entrie[0].id;
    const useID = user[0].id;

    const data = await insertVoteDB(entID, useID);

    res.status(200).send({ status: "ok", data: { data } });
    return;
  } catch (e) {
    next(e);
  }
};

module.exports = insertVote;
