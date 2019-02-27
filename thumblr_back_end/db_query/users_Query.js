const { db }  = require("../db/seed.js") 

//GET SINGLE USER INFO FROM BOTH USER AND PROFILE TABLE
const getSingleUserInfo = (req,res,next) =>{
  db.oneOrNone('SELECT * FROM USERS LEFT JOIN PROFILE ON USERS.ID = PROFILE.USER_ID WHERE USERS.id=${params}',{
    params:req.params.id
  }).then((table)=>{
    if(table){
    res.status(200).json({
      status:200,
      message: "success",
      data:table
    })
  }
  else{
    res.status(500).json({
      status:505,
      message: "NOT FOUND ON SERVER"
    })
  }
  })
    .catch((err)=>{
      res.json({
        status: 404,
        message: err
      })
    })
}

//CREATE NEW USER IN USEr TABLE
// const createUser = (req, res, next) => 
// {
//  db.any("INSERT INTO USERS(username, email) VALUES (${username},${email})",req.body)
//     .then(() => {
//       res.status(200).json({
//         status: 200,
//         message: "added",
//       })
//     })
//     .catch((err) => {
//       res.status({
//         status: 404,
//         error: err.message,
//         message: req.params,
//         message2: req.body
//       })
//        })
// }

/// WIP 
// const createProfile = (req, res, next) => {
//           db.any("INSERT INTO PROFILE (user_id) VALUES (${id})",{
//             id: req.params.id
//           }).then(()=>{
//             res.status(200).json({
//               status: 200,
//               message:"ADD",
//               message2: req.body
//             })
//           }).catch(err => {
//             res.status({
//               error: 404,
//               message: err.message
//             })
//           })
// }


//still need to work on logic. THis will just create a 
const createProfile = (req,res,next) =>{
  let id = req.params.id
  db.none(`INSERT INTO PROFILE(user_id) VALUES (${id}, ${profile})`, ).then(()=>{
  res.send("WORKS")
}).catch(err => {
  console.log(err.message)
})
}

//EDIT USER TABLE AND PROFILE TABLE // NESTED THEN FOR ASYSNC
const editUser = (req,res,next) =>{
  db.none("UPDATE USERS SET username= ${username}, email = ${email}, password_salt = ${password} WHERE id = ${params}", {
    params: req.params.id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(() => {
    db.none("UPDATE PROFILE SET profile_pic = ${profile_pic}, header_pic = ${header_pic}, first_name = ${first_name}, last_name = ${last_name} WHERE user_id = ${params}",{
      params: req.params.id,
      profile_pic: req.body.profile_pic,
      header_pic: req.body.header_pic,
      first_name:  req.body.first_name,
      last_name: req.body.last_name
    }
  ).then(() => {
      res.status({
        status: 200,
        message: "success",
        method: "PATCH",
        on: req.params,
        payload: req.body
      })
    })
    .catch(err => {
      res.json({
        status: 404,
        error: err.message
      })
    })
  })
}



///import for AUTH 
const authHelpers = require("../auth/helper");

function createUser(req, res, next) {
  console.log(req.body)
  const hash = authHelpers.createHash(req.body.password_unsalt);

  db.none(
      "INSERT INTO USERS (username,email, password_salt, password_unsalt) VALUES (${username}, ${email}, ${password_salt}, ${password_unsalt})", {
        username: req.body.username,
        email: req.body.email,
        password_salt: hash,
        password_unsalt: req.body.password_unsalt
      }
    )
    .then(() => {
      res.status(200).json({
        message: "Registration successful."
      });
    })
    .catch(err => {
      res.status(400).json({
        message: err
      });
    });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  console.log("User Is Logged In?")
  if (req.user) {
    res.json({
      username: req.user
    });
  } else {
    res.json({
      username: null
    })
  }
}

module.exports = {
  isLoggedIn,
  getSingleUserInfo,
  createUser,
  editUser,
  createProfile,
  loginUser,
  logoutUser
}

