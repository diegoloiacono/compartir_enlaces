const { generateError } = require("../../helpers");
const { selectEntriesWithVotes } = require("../../repositories/entries");

const getEntriesWithVotes = async (req, res, next) => {
  try {
    const entries = await selectEntriesWithVotes();

    if (entries.length === 0) {
      throw generateError("No entries found", 404);
    }

    res.status(200).send({ status: "ok", data: entries });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntriesWithVotes;
