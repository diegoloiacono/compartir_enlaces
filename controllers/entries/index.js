const createEntry = require("./createEntry");
const editEntry = require("./editEntry");
const getEntries = require("./getEntries");
const getEntriesByDate = require("./getEntriesByDate");
const deleteEntry = require("./deleteEntry");
const getEntriesWithVotes = require("./getEntriesWithVotes");
const checkVote = require("./checkVote");

module.exports = {
  createEntry,
  editEntry,
  getEntries,
  deleteEntry,
  getEntriesByDate,
  getEntriesWithVotes,
  checkVote,
};
