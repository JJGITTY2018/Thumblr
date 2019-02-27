const {
  db
} = require("../db/seed.js")



const getFollowList = (req,res,next) =>{
  db.any("SELECT follower_id AS user_id, username AS IS_following FROM following JOIN users ON following_id = users.id WHERE following.follower_id = ${params}",{
    params: req.params.user_id
  }).then((data)=>{
    res.status(200).json({
      status:200,
      data: data

    })
  }).catch(err =>{
    res.json({
    status: 404,
    message: err.message
    })
   
  })
}



const insertFollow = (req, res, next) => {
  db.any("INSERT INTO following (follower_id, following_id) VALUES (${user_id},${following})", {
    user_id: req.body.user_id,
    following: req.body.following
  }).then((data) => {
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

const removeFollow = (req, res, next) => {
  db.any("DELETE FROM Following WHERE Follower_id = ${user_id} AND Following_id = ${following}", {
    user_id: req.body.user_id,
    following: req.body.following
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
  getFollowList,
  insertFollow,
  removeFollow
}