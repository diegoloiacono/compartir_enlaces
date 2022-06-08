require("dotenv").config();
const express = require("express");

const { SERVER_PORT } = process.env;

const {
  validateAuth,
  checkAdmin,
  notFound,
  handleError,
} = require("./middlewares");

const {
  registerUser,
  activateUser,
  loginUser,
  deleteUser,
  // getUsers,
} = require("./controllers/users");

const { createEntry, editEntry, getEntries } = require("./controllers/entries");

const app = express();

app.use(express.json());

app.post("/users", registerUser);
// app.get("users", getUsers )
app.get("/users/activate/:registrationCode", activateUser);
app.post("/login", loginUser);
app.post("/entries", validateAuth, createEntry);
app.get("/entries", validateAuth, getEntries)
app.patch("/entries/:idEntry", validateAuth, editEntry);
app.delete("/users/:idUser", validateAuth, checkAdmin, deleteUser);

/** Middleware 404 */
app.use(notFound);

/** Middleware error */
app.use(handleError);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
