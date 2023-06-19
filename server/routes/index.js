const express = require("express");
const router = express.Router();

const noteRouter = require("./note");

router.use("/notes", noteRouter);

module.exports = router;
