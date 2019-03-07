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
    db.any("SELECT POSTS.ID AS POST_ID, POST_TYPE, TEXT_TITLE, TEXT_BODY, PUBLISH_DATE, MEDIA_URL, array_agg(TAG_NAME) AS TAG_NAMES FROM POSTS FULL OUTER JOIN POST_TAG ON POSTS.ID = POST_TAG.POST_ID FULL OUTER JOIN TAGS ON TAGS.ID = POST_TAG.TAG_ID WHERE POSTS.ID IS NOT NULL AND TEXT_TITLE LIKE ${params} OR TAG_NAME LIKE ${params} GROUP BY POSTS.ID, POST_TYPE, TEXT_TITLE, TEXT_BODY, PUBLISH_DATE, MEDIA_URL", {
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


  const getFollowersPosts = (req, res, next) => {
    console.log(req.params.id)
    let params = req.params.id
    db.any(`SELECT POSTS.ID AS POST_ID, POST_TYPE,TEXT_TITLE, TEXT_BODY, AUTHOR_ID, ARRAY_AGG(TAG_NAME) AS TAGS, USERS.USERNAME AS AUTHOR_USERNAME, PUBLISH_DATE, MEDIA_URL, array_agg(LIKES.USER_ID) AS LIKES_BY_USER_ID, array_agg(B.USERNAME) AS LIKES_BY_USER_NAME, USERS.HEADERIMG AS AUTHOR_HEADER_IMG, USERS.PROFILEIMG AS AUTHOR_PROFILE_IMG FROM POSTS LEFT JOIN LIKES ON posts.id = likes.post_id LEFT JOIN USERS AS B ON LIKES.USER_ID = B.ID LEFT JOIN USERS ON AUTHOR_ID = USERS.ID LEFT JOIN POST_TAG ON POST_TAG.POST_ID = POSTS.ID LEFT JOIN TAGS ON TAG_ID = TAGS.ID WHERE AUTHOR_ID IN (${params}) GROUP BY (POSTS.ID,POST_TYPE,TEXT_TITLE,TEXT_BODY,AUTHOR_ID,PUBLISH_DATE,MEDIA_URL,AUTHOR_USERNAME,AUTHOR_HEADER_IMG,AUTHOR_PROFILE_IMG)`,req.params.id
    ).then((data)=>{
      res.status(200).json({
        status:200,
        data: data
      })
    }).catch(err =>{
      status: 404;
      error: err.message
    })
  }


  module.exports = {
    getPostbyId,
    getAllUserPost,
    getAllUserPostByType,
    getAllPostsByTagsName,
    createAPost,
    deleteAPost,
    getFollowersPosts
  }


  //NOTES:
  // SUGGEST USING REQ.QUERY on PATH TO QUERY MULTIPLE OF THE SAME POSTS


  //FIXME: GET POST BY TAG ORIGINAL
  // SELECT POST_ID,  POST_TYPE, TEXT_TITLE, TEXT_BODY, PUBLISH_DATE, MEDIA_URL, array_agg(TAG_NAME) as TAG_NAMES FROM POSTS JOIN POST_TAG ON POSTS.ID = POST_TAG.POST_ID JOIN TAGS ON TAGS.ID = POST_TAG.TAG_ID WHERE TAG_NAME LIKE ${params} OR TEXT_BODY LIKE ${params} GROUP BY POST_ID, POST_TYPE, TEXT_TITLE, TEXT_BODY, PUBLISH_DATE, MEDIA_URL