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
} = require("./controllers/users");
// controller/entries
const { insertVote, getVotes, deleteVote } = require("./controllers/votes");

const {
  createEntry,
  editEntry,
  getEntries,
  getEntriesByDate,
  deleteEntry,
} = require("./controllers/entries");

const app = express();

app.use(express.json());

app.post("/users", registerUser);
app.delete("/users/:idUser", validateAuth);
app.get("/votes", validateAuth, getVotes);
app.post("/vote", validateAuth, insertVote);
app.delete("/vote", validateAuth, deleteVote);
app.get("/users/activate/:registrationCode", activateUser);
app.post("/login", loginUser);
app.post("/entries", validateAuth, createEntry);
app.get("/entries", getEntries);
app.get("/entries/:date", validateAuth, getEntriesByDate);
app.patch("/entries/:idEntry", validateAuth, editEntry);
app.delete("/users/:idUser", validateAuth, checkAdmin, deleteUser);
app.delete("/entries/:idEntry", validateAuth, deleteEntry);

/** Middleware 404 */
app.use(notFound);

/** Middleware error */
app.use(handleError);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
