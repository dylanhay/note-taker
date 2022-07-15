//dependencies
const path = require('path');
const router = require('express').Router();

//route for index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//route for notes.html
router.get("/db", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//route for wildcard entries
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//router export
module.exports = router;