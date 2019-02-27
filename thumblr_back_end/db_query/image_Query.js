//Refer to POST

const {db} = require("../db/seed.js")

const getImagesbyPosts = (req,res,next) =>{
  db.any("SELECT POSTS.ID AS POST_ID, IMAGE_URL FROM POSTS JOIN IMAGES ON UPLOADER_ID = POSTS.ID WHERE POSTS.ID = ${params}",{
    params: req.body.posts_id
  } ).then((result) => {
    res.status(200).json({
      status: 200,
      data:result
    })
    
  }).catch((err) => {
    res.status(400).json({
      status: 404,
      err: err.message
    })
  });
}


const uploadImage = (req, res, next) => {
  db.any("INSERT INTO images (uploader_id, image_url) VALUES (${params1},${params2})", {
    params1: req.body.posts_id,
    params2: req.body.image_url
  }).then(() => {
    res.status(200).json({
      status: 200,
      message:"added"
    })

  }).catch((err) => {
    res.status(400).json({
      status: 404,
      err: err.message
    })
  });
}

const deleteImage = (req, res, next) => {
  db.any("DELETE FROM images WHERE id = ${params}", {
    params1: req.body.image_id,
  }).then(() => {
    res.status(200).json({
      status: 200,
      message: "delete"
    })

  }).catch((err) => {
    res.status(400).json({
      status: 404,
      err: err.message
    })
  });
}



module.exports = {
  uploadImage,
  getImagesbyPosts,
  deleteImage
}