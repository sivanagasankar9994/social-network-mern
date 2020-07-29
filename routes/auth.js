const express = require("express");
const auth = require("../controllers/auth");
const validator = require("../validator");
const { userById } = require("../controllers/user");
// const auth = require("../middlewares/auth");

const router = express.Router();

router.route("/signup").post(validator.userSignupValidator, auth.signup);

router.route("/signin").post(auth.signin);

router.route("/signout").get(auth.signout);

// then use this route for social login
router.route("/social-login").post(auth.socialLogin);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
