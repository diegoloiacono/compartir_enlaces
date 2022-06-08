const { removeUser } = require("../../repositories/entries");
const { generateError } = require("../../helpers");

const deleteEntry = async (req, res, next) => {
  try {
    const { idEntry } = req.params;

    const affectedRows = await removeUser(idEntry);

    if (affectedRows === 0) {
      generateError("Entry does not exist", 404);
    }

    res.status(200).send({ status: "ok", message: "Entry deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteEntry;
