const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { selectUserByEmail } = require("../../repositories/users");
const { generateError } = require("../../helpers");
const Joi = require("joi");

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await selectUserByEmail(email);

    const { error } = loginUserSchema.validate(req.body);

    if (error) {
      generateError(error.message, 400);
    }

    if (user == null) {
      generateError("User does no exist", 400);
    }

    const encryptedPassword = user.password;

    const isLoginValid =
      user && (await bcrypt.compare(password, encryptedPassword));

    if (!isLoginValid) {
      generateError("Wrong password or email", 400);
    }

    if (user.registrationCode) {
      generateError("User not activated. Check your email", 400);
    }

    const tokenPayload = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).send({ status: "ok", data: { token } });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
