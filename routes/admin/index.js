const express = require("express");
const router = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// register : api/admin/register
router.post("/register", require("./register"));
//login :
router.post("/login", require("./login"));

//get users
router.get("/users", verifiedToken, require("./getUsers"));

// ban user : /api/admin/banUser
router.put("/banUser/:userId", verifiedToken, require("./banUser"));

// unban user : /api/admin/banUser
router.put("/unbanUser/:userId", verifiedToken, require("./unbanUser.js"));

// add post : /api/admin/addPost
router.post(
  "/addPost",
  verifiedToken,
  upload.single("postPic"),
  require("./addPost")
);

module.exports = router;
