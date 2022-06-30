const { generateError } = require("../../helpers");
const { selectEntries } = require("../../repositories/entries");

const getEntries = async (req, res, next) => {
  try {

    const entries = await selectEntries();

    if (entries.length === 0) {
      throw generateError("No entries found", 404);
    }

    res.status(200).send({ status: "ok", data: entries });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntries;
