const { insertEntry } = require("../../repositories/entries");
const { generateError } = require("../../helpers");
const Joi = require("joi");

const createEntrySchema = Joi.object({
  title: Joi.string().min(4).max(100).required(),
  url: Joi.string().uri().required(),
  description: Joi.string().min(4).max(100).required(),
});

const createEntry = async (req, res, next) => {
  try {
    const userId = req.auth.id;

    const { error } = createEntrySchema.validate(req.body);

    if (error) {
      generateError(error.message, 400);
    }

    const { title, description, url } = req.body;

    const insertId = await insertEntry({
      title,
      url,
      description,
      userId,
    });

    res.status(201).send({
      status: "ok",
      data: { id: insertId, title, url, description, userId },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createEntry;
