var express = require('express');
var router = express.Router();

const {
getPostLikes,
insertLikes,
removeLikes
} = require("../db_query/Likes_query.js")

/* GET users listing. */
router.get('/:post_id', getPostLikes)
router.post('/', insertLikes)
router.delete('/', removeLikes)

module.exports = router;
