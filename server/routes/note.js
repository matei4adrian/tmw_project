const express = require("express");
const router = express.Router();
const noteController = require("../controllers").note;

router.get("/", noteController.getAllNotes);
router.post("/", noteController.addNote);
router.put("/:noteId", noteController.updateNote);
router.delete("/:noteId", noteController.deleteNote);

module.exports = router;
