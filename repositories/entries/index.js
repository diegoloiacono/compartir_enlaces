const insertEntry = require("./insertEntry");
const selectEntryById = require("./selectEntryById");
const selectEntryByDate = require("./selectEntryByDate");
const selectEntries = require("./selectEntries");
const updateEntryById = require("./updateEntryById");
const removeEntry = require("./removeEntry");

module.exports = {
  insertEntry,
  selectEntryById,
  selectEntryByDate,
  updateEntryById,
  selectEntries,
  removeEntry,
};
