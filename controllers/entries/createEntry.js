const { insertEntry } = require("../../repositories/entries");

const createEntry = async (req, res, next) => {
  try {
    // const { id: userId } = req.auth;

    const userId = req.auth.id;

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
    console.log(title);
  } catch (error) {
    // console.log(error)
    next(error);
  }
};

module.exports = createEntry;
