const db = require("../db/seed.js").db

//GET ALL POST  OF A SINGLE ID
  const getPostbyId = (req,res,next) => {
    console.log(req)
    db.one("SELECT * FROM POSTS WHERE id = ${params}",{
      params: req.params.id
    }).then((data)=> {
      res.status(200).json({
        status: 200,
        message: "success",
        data: data
      })
    }).catch(err => {
      res.json({
        status: 404,
        message: "FAIL",
        error: err.message
      })
    })
  }

//GET ALL POST OF A USERS
  const getAllUserPost = (req, res, next) => {
    db.any("SELECT * FROM POSTS JOIN POST_TAG ON POSTS.ID = POST_TAG.POST_ID JOIN TAGS ON TAGS.ID = POST_TAG.TAG_ID WHERE AUTHOR_ID = ${params}", {
      params: req.params.id
    }).then((data)=>{
      res.status(200).json({
        status: 200,
        message: "Complete",
        data: data
      })
    }).catch(err =>{
      res.json({
        status:404,
        STATUS: "FAIL",
        error: err.message
      })
    })
  }


  //GET ALL POST BASED ON TAG NAMES
  const getAllPostsByTagsName = (req, res, next) => {
    let params = req.params.tag
    db.any("SELECT * FROM POSTS JOIN POST_TAG ON POSTS.ID = POST_TAG.POST_ID JOIN TAGS ON TAGS.ID = POST_TAG.TAG_ID WHERE TAG_NAME LIKE ${params}", {
      params: "%" + req.params.tag + "%"
    }).then((data) => {
      res.status(200).json({
        status: 200,
        message: "Complete",
        data: data,
        request: req.params.tag
      })
    }).catch(err => {
      res.json({
        status: 404,
        STATUS: "FAIL",
        error: err.message
      })
    })
  }
  const getAllUserPostByType = (req,res,next) => {
    db.any("SELECT * FROM POSTS JOIN POST_TAG ON POSTS.ID = POST_TAG.POST_ID JOIN TAGS ON TAGS.ID = POST_TAG.TAG_ID WHERE POST_TYPE = ${params}",{
      params: req.params.type
    }).then((data)=>{
      res.status(200).json({
        status:200,
        data: data
      })
    }).catch(err =>{
      status: 404;
      error: err.message
    })
  }

  //CREATE A POST - MUST IF WORK
  const createAPost = (req,res,next) =>{
    db.any("INSERT INTO POSTS(post_type, text_title, text_body, author_id, reblog_id, video_url, video_caption, video_source, audio_url, audio_caption, audio_source, quote_text, quote_source, link_url) VALUES(${type}, ${title},${body}, ${author}, ${reblog_id}, ${video_url},${video_caption}, ${video_source}, ${audio_url}, ${audio_caption}, ${audio_source}, ${quote_text}, ${quote_source}, ${link_url}",req.body).then(()=>{
      res.status(200).json({
        status:200,
        message: "Success"
      })
    }).catch(err =>{
      res.status.json({
        status: 404,
        message: "Not Found"
      })
    })
  }

  //UNTEST CODE
  const deleteAPost = (req,res,next) =>{
    db.none("DELETE FROM POSTS WHERE ID = ${params}", {
      params: req.params.id
    }).then( () => {
      res.status(200).json({
        status: res.status,
        message: "sucess"
      })
    }).catch (err => {
      res.status.json({
        status: 404,
        error: err.message
      })
    })
  }


  module.exports = {
    getPostbyId,
    getAllUserPost,
    getAllUserPostByType,
    getAllPostsByTagsName,
    createAPost,
    deleteAPost
  }


  //NOTES:
  // SUGGEST USING REQ.QUERY on PATH TO QUERY MULTIPLE OF THE SAME POSTS