const express = require("express");
const {
  createUser,
  createManyUsers,
  getAllUsers,
  updateEmail,
  getDetails,
  userRegister,
  getAllUserDetails,
} = require("../apis-function/user-functions");
const router = express.Router();
router.post("/userSignup", createUser);
router.post("/userSignupMany", createManyUsers);
router.get("/getUsers", getAllUsers);
router.put("/modifyMail", updateEmail);
router.get("/get-details/:id", getDetails);
router.post("/userRegister", userRegister);
router.get("/getUserDetails/:email/:mobile", getAllUserDetails);
router.get("/getAllUsers", getAllUsers);
module.exports = router;
