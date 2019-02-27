var express = require('express');
var router = express.Router();

const {
uploadImage,
getImagesbyPosts,
deleteImage
} = require("../db_query/image_query.js")

/* GET users listing. */
router.get('/:post_id', getImagesbyPosts)
router.post('/', uploadImage)
router.delete('/', deleteImage)


module.exports = router;
