var express = require('express');
var router = express.Router();

const {
  getPostbyId,
  getAllUserPost,
  getAllUserPostByType,
  getAllPostsByTagsName,
  createAPost,
  deleteAPost,
  getFollowersPosts,
  getsFollowerList
} = require("../db_query/posts_Query.js")

/* GET users listing. */
router.get('/followers/:id',getFollowersPosts)
router.get('/users/:id',getAllUserPost)
router.get('/tag/:tag',getAllPostsByTagsName)
router.get('/type/:type',getAllUserPostByType)
router.post('/',createAPost)
router.delete('/:id',deleteAPost )
module.exports = router;
