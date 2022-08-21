const express = require("express");
const router = express.Router();
const moduleController = require("../controllers/module");
const { isAuth } = require("../controllers/auth");

router.get("/:module", moduleController.getQuestions);

// router.post("/signup", isAuth, userController.createNewUser);

module.exports = router;
