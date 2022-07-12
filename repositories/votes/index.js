const insertVoteDB = require("./insertVoteDB");
const checkEntrieById = require("./checkEntrieById");
const checkUserById = require("./checkUserById");
const getAllVotes = require("./getAllVotes");
const deleteVoteDB = require("./deleteVoteDB");
const selectVote = require("./selectVote");

module.exports = {
  insertVoteDB,
  checkEntrieById,
  checkUserById,
  getAllVotes,
  deleteVoteDB,
  selectVote,
};
