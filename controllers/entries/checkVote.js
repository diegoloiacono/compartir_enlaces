const { generateError } = require("../../helpers");
const { selectCheckVote } = require("../../repositories/entries");

const checkVote = async (req, res, next) => {
  try {
    const { entryId } = req.params;
    const userId = req.auth.id;

    const isVoted = await selectCheckVote(entryId, userId);

    if (isVoted.length === 0) {
      throw generateError("No entries found", 404);
    }

    res.status(200).send({ status: "ok", data: isVoted });
  } catch (error) {
    next(error);
  }
};

module.exports = checkVote;
