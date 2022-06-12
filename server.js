require("dotenv").config();
const express = require("express");

const { SERVER_PORT } = process.env;

const { validateAuth, notFound, handleError } = require("./middlewares");
// controller/users
const {
  registerUser,
  activateUser,
  loginUser,
  getUsers,
} = require("./controllers/users");
// controller/entries
const { 
  createEntry,
   editEntry, 
   getEntries 
  } = require("./controllers/entries");
// controller/votes
const {
  insertVote,
  getVotes,
  deleteVote
}= require('./controllers/votes')

const app = express();

app.use(express.json());

app.post("/users", registerUser);
app.get("/users/activate/:registrationCode", activateUser);
app.post("/login", loginUser);
app.post("/entries", validateAuth, createEntry);
app.patch("/entries/:idEntry", validateAuth,  editEntry);
app.delete("/users/:idUser", validateAuth);

// vote area
app.get('/votes', validateAuth,getVotes )
app.post("/vote", validateAuth, insertVote)
app.delete('/vote',validateAuth ,deleteVote)

/** Middleware 404 */
app.use(notFound);

/** Middleware error */
app.use(handleError);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
