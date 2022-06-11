const insertEntry = require("./insertEntry");
const selectEntryByDate = require("./selectEntryByDate");
const selectEntries = require("./selectEntries");
const updateEntryById = require("./updateEntryById");
const removeEntry = require("./removeEntry");

module.exports = {
  insertEntry,
  selectEntryByDate,
  updateEntryById,
  selectEntries,
  removeEntry,
};
