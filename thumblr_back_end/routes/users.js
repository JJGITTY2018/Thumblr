var express = require('express');
var router = express.Router();

//import passport and login functions
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helper");


const {
  getSingleUserInfo,
  createUser,
  editUser,
  createProfile,
  loginUser,
  logoutUser,
  isLoggedIn
} = require("../db_query/users_Query.js")

/* GET users listing. */
router.get("/log", isLoggedIn);

router.post('/:id/profile',createProfile)

router.get('/:id',getSingleUserInfo)
router.patch("/:id", editUser)

router.post('/sign-up', createUser)
router.post("/login", passport.authenticate("local", {}),loginUser);

router.post("/logout", loginRequired, logoutUser);


module.exports = router;
