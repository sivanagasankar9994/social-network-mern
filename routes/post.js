const express = require("express");
const {
  createPost,
  postsByUser,
  getPosts,
  postPhoto,
  deletePost,
  updatePost,
  isPoster,
  postById,
  like,
  unlike,
  singlePost,
  comment,
} = require("../controllers/post");
const validator = require("../validator");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

// const auth = require("../middlewares/auth");

const router = express.Router();

router.route("/posts").get(getPosts);

// like unlike
router.route("/like").put(requireSignin, like);
router.route("/unlike").put(requireSignin, unlike);

// comments
router.route("/comment").put(requireSignin, comment);

router
  .route("new/:userId")
  .post(requireSignin, createPost, validator.createPostValidator);
router.route("/by/:userId").get(requireSignin, postsByUser);
router.route("/:postId").get(singlePost);

router.route("/:postId").delete(requireSignin, isPoster, deletePost);
router.route("/:postId").put(requireSignin, isPoster, updatePost);
router.route("/photo/:postId").get(postPhoto);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);
// any route containing :postId, our app will first execute postById()
router.param("postId", postById);

module.exports = router;
