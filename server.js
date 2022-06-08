require("dotenv").config();
const express = require("express");

const { SERVER_PORT } = process.env;

const { validateAuth, notFound, handleError } = require("./middlewares");

const {
  registerUser,
  activateUser,
  loginUser,
  // getUsers,
} = require("./controllers/users");

const { createEntry, editEntry } = require("./controllers/entries");

const app = express();

app.use(express.json());

app.post("/users", registerUser);
// app.get("users", getUsers )
app.get("/users/activate/:registrationCode", activateUser);
app.post("/login", loginUser);
app.post("/entries", validateAuth, createEntry);
app.patch("/entries/:idEntry", validateAuth, editEntry);
app.delete("/users/:idUser", validateAuth);
// app.delete("/entries/:idUser", validateAuth);

/** Middleware 404 */
app.use(notFound);

/** Middleware error */
app.use(handleError);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});
