const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { insertUser, selectUserByEmail } = require("../../repositories/users");
const { generateError } = require("../../helpers");
const { sendMail } = require("../../helpers");
const Joi = require("joi");

const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(6).max(50).required(),
  password: Joi.string().required(),
});

const registerUser = async (req, res, next) => {
  try {
    const { email, password, name, role } = req.body;

    const { error } = registerUserSchema.validate(req.body);

    if (error) {
      generateError(error.message, 400);
    }

    const userWithSameEmail = await selectUserByEmail(email);

    if (userWithSameEmail) {
      generateError("Already exists an user with that email", 400);
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const registrationCode = uuidv4();

    const insertId = await insertUser({
      email,
      encryptedPassword,
      role,
      name,
      registrationCode,
    });

    const { SERVER_HOST, SERVER_PORT } = process.env;

    await sendMail(
      "¡Bienvenidos a Enlaces Web!",
      `
      <p>Activa tu cuenta aquí:</p>
      <a href="http://${SERVER_HOST}:${SERVER_PORT}/users/activate/${registrationCode}">Activar</a>
      `,
      email
    );

    res.status(201).send({ status: "ok", data: { id: insertId } });
  } catch (error) {
    next(error);
  }
};

module.exports = registerUser;
