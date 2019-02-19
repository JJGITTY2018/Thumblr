var express = require('express');
var router = express.Router();

const { getSingleUserInfo,
createUser, editUser, createProfile} = require("../db_query/users_Query.js")

/* GET users listing. */
router.post('/:id/profile',createProfile)
router.get('/:id',getSingleUserInfo)
router.post('/', createUser)
router.patch("/:id", editUser)
module.exports = router;
