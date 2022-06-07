const { removeUser } = require("../../repositories/users");
const { generateError } = require("../../helpers");

const deleteUser = async (req, res, next) => {
  try {
    const { idUser } = req.params;

    const affectedRows = await removeUser(idUser);

    if (affectedRows === 0) {
      generateError("User does not exist", 404);
    }

    res.status(200).send({ status: "ok", message: "User deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
