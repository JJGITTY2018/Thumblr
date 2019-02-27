const {
  db
} = require("../db/seed.js")



const getPostLikes = (req, res, next) => {
  db.any("SELECT likes.id AS LIKE_ID, POSTS.ID AS POST_ID, LIKES.USER_ID AS like_by_user_id FROM POSTS JOIN LIKES ON POSTS.ID = LIKES.POST_ID WHERE POSTS.ID = ${post_id}", {
    params: req.params.post_id
  }).then((data) => {
    res.status(200).json({
      status: 200,
      data: data

    })
  }).catch(err => {
    res.json({
      status: 404,
      message: err.message
    })

  })
}


const insertLikes = (req, res, next) => {
  db.any("INSERT INTO LIKES (post_id, user_id) VALUES (${post_id},${user_id})", {
    post_id: req.body.post_id,
    user_id: req.body.user_id
  }).then(() => {
    res.status(200).json({
      status: 200,
      message: "added"

    })
  }).catch(err => {
    res.json({
      status: 404,
      message: err.message
    })

  })
}

const removeLikes = (req, res, next) => {
  db.any("DELETE FROM LIKES WHERE USER_ID = ${user_id} AND POST_ID = ${post_id}", {
      user_id: req.body.user_id,
      post_id: req.body.post_id
    })
    .then(() => {
      res.status(200).json({
        status: 200,
        message: "success"

      })
    }).catch(err => {
      res.json({
        status: 404,
        message: err.message
      })

    })
}

module.exports = {
  getPostLikes,
  insertLikes,
  removeLikes

}