const {
  selectVote,
  insertVoteDB,
  deleteVoteDB,
} = require("../../repositories/votes");

const voteEntry = async (req, res, next) => {
  try {
    const { entryId } = req.params;
    const userId = req.auth.id;

    const vote = await selectVote(entryId, userId);

    if (vote) {
      deleteVoteDB(entryId, userId);
      res.status(200).send({ status: "ok", message: "Vote deleted" });
    } else {
      insertVoteDB(userId, entryId);
      res.status(201).send({ status: "ok", message: "Vote created" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = voteEntry;
