const express = require("express");
const router = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");
router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.post(
  "/addContact",
  verifiedToken,
  upload.single("photo"),
  require("./addContact")
);
router.get("/contacts", verifiedToken, require("./getContacts"));
router.put(
  "/updateContact/:contactId",
  verifiedToken,
  require("./updateContact")
);
router.delete(
  "/deleteContact/:contactId",
  verifiedToken,
  require("./deleteContact")
);
router.delete("/deleteAccount", verifiedToken, require("./deleteAccount"));
router.put(
  "/updatePhoto",
  verifiedToken,
  upload.single("photo"),
  require("./updatePhoto")
);

//add comment
router.post("/addComment/:postId", verifiedToken, require("./addComment"));

//get comments
router.get("/getComments/:postId", verifiedToken, require("./getComments"));

module.exports = router;
