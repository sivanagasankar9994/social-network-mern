const express = require("express");
const {
  userById,
  allUsers,
  getUser,
  updateUser,
  userPhoto,
  deleteUser,
  addFollower,
  addFollowing,
  removeFollowing,
  removeFollower,
  findPeople,
  hasAuthorization,
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.route("/follow").put(requireSignin, addFollowing, addFollower);
router.route("/unfollow").put(requireSignin, removeFollowing, removeFollower);

router.route("/").get(allUsers);
router.route("/photo/:userId").get(userPhoto);
router.route("/:userId").get(requireSignin, getUser);
router.route("/:userId").put(requireSignin,hasAuthorization, updateUser);
router.route("/:userId").delete(requireSignin, hasAuthorization,deleteUser);


// router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);
// any route containing :userId, our app will first execute userByID()

// who to follow
router.route("/findpeople/:userId").get(requireSignin, findPeople);

router.param("userId", userById);

module.exports = router;
