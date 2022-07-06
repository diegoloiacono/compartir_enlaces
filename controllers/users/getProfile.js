const {
  selectUserById,
  selectEntriesByUserId,
} = require("../../repositories/users");

const getProfile = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    const user = await selectUserById(userId);

    const userEntries = await selectEntriesByUserId(userId);

    res
      .status(200)
      .send({ status: "ok", data: { ...user, entries: userEntries } });
  } catch (error) {
    next(error);
  }
};

module.exports = getProfile;
