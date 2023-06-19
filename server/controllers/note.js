const NoteDB = require("../models").Note;

const controller = {
  getAllNotes: async (req, res) => {
    NoteDB.findAll()
      .then((notes) => {
        res.status(200).send(notes);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "Server error" });
      });
  },
  addNote: async (req, res) => {
    if (req.body.title.length < 3 || req.body.title < 50) {
      res.status(400).send({ message: "Invalid note!" });
    } else {
      NoteDB.create(req.body)
        .then((note) => {
          res.status(201).send(note);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send({ message: "Server error" });
        });
    }
  },
  updateNote: async (req, res) => {
    if (req.body.title && req.body.title.length < 3) {
      res.status(400).send({ message: "Invalid note" });
    } else {
      NoteDB.findByPk(req.params.noteId)
        .then(async (note) => {
          if (note) {
            Object.assign(note, req.body);
            await note.save();
            res.status(202).send({ message: "Note updated!" });
          } else {
            res.status(404).json({ message: "Note not found!" });
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({ message: "Server error!" });
        });
    }
  },
  deleteNote: async (req, res) => {
    NoteDB.findByPk(req.params.noteId)
      .then(async (note) => {
        if (note) {
          await note.destroy();
          res.status(204).send({ message: "Note deleted!" });
        } else {
          res.status(404).json({ message: "Note not found!" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Server error!" });
      });
  },
};

module.exports = controller;
