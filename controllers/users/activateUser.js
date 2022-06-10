const {
  selectUserByActivationCode,
  deleteRegistrationCode,
} = require("../../repositories/users");
const { generateError } = require("../../helpers");

const activateUser = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;

    const user = await selectUserByActivationCode(registrationCode);

    if (!user) {
      generateError("Invalid registration code or already activated", 404);
    }

    await deleteRegistrationCode(user.id);

    res.status(200).send({ status: "ok", message: "User activated" });
  } catch (error) {
    next(error);
  }
};

module.exports = activateUser;
