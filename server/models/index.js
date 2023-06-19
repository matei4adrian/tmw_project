const Sequelize = require("sequelize");
const db = require("../config/db");
const NoteModel = require("./note");

const Note = NoteModel(db, Sequelize);

module.exports = {
  Note,
  connection: db,
};
