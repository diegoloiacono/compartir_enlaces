const { generateError } = require("../../helpers");
const { selectEntries } = require("../../repositories/entries");

const getEntries = async (req, res, next) => {
  try {
    const { title, description } = req.query;

    const entries = await selectEntries({ title, description });

    if (entries.length === 0) {
      throw generateError("No entries found", 404);
    }

    res.status(200).send({ status: "ok", data: entries });
  } catch (error) {
    next(error);
  }
};

module.exports = getEntries;
