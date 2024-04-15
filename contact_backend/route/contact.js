const express = require("express");

const {
  contactController,
  getController,
} = require("../controller/contact.js");

const router = express.Router();

router.post("/contact", contactController);
router.get("/contact", getController);

module.exports = router;
