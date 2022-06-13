const {
  selectEntryById,
  updateEntryById,
} = require("../../repositories/entries");
const { generateError } = require("../../helpers");
const { editEntrySchema } = require("../../schemas");

const editEntry = async (req, res, next) => {
  try {
    const { idEntry } = req.params;

    const entryDB = await selectEntryById(idEntry);

    if (!entryDB) {
      generateError("Entry does not exist", 404);
    }

    const userId = req.auth.id;

    if (entryDB.user_id !== userId) {
      generateError("You cant update someone else's entry", 400);
    }

    await updateEntryById({ ...entryDB, ...req.body });

    const { error } = editEntrySchema.validate(req.body);

    if (error) {
      generateError(error.message, 400);
    }

    res.status(200).send({ status: "ok", message: "Entry updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = editEntry;
