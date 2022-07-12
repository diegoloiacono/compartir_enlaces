require("dotenv").config();
const express = require("express");
const cors = require("cors");

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
app.use(
  cors({
    origin: ["http://localhost:3000", "www.mi-otro-frontend.com"],
  })
);

app.use(express.json());

// users
app.post("/users", registerUser);
app.get("/users/activate/:registrationCode", activateUser);
app.post("/login", loginUser);
app.delete("/users/:idUser", validateAuth, checkAdmin, deleteUser);
// entries
app.get("/entries", getEntries);
app.post("/entries", validateAuth, createEntry);
app.patch("/entries/:idEntry", validateAuth, editEntry);
app.delete("/entries/:idEntry", validateAuth, deleteEntry);
// votes
app.get("/votes", validateAuth, getVotes);
app.post("/vote", validateAuth, insertVote);
app.delete("/vote", validateAuth, deleteVote);

/** Middleware 404 */
app.use(notFound);

/** Middleware error */
app.use(handleError);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
