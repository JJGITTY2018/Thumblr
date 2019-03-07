var express = require('express');
var router = express.Router();

const {
  getFollowList,
  insertFollow,
  removeFollow

} = require("../db_query/follow_Query.js")

/* GET users listing. */
router.get('/:user_id', getFollowList)
router.post('/', insertFollow)
router.delete('/',removeFollow)


module.exports = router;
