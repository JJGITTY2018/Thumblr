const pgp = require("pg-promise")({})
const db = pgp("postgres://localhost:5432/thumblr")

module.exports= { db }

// const faker = require("faker")

// let users = [];

// for (let i = 0; i < 11; i++){
//   let username = faker.name.findName()
//   let email = faker.internet.email()
//   let str = `('${username}', '${email}')`
//   users.push(str)
// }

// let tags = [];
// for (let i = 0; i < 24; i++) {
//   let tags_name = faker.random.word()
//   let str = `('${tags_name}')`
//   tags.push(str)
// }

// let images = [];
// for (let i = 0; i < 24; i++) {
//   let image = faker.random.image()
//   let str = `('${image}')`
//   images.push(str)
// }

// const usersData = users.join(",")
// const tagsData = tags.join(",")
// const imagesData = images.join(",")

// //Give some data to the DB
// db.none("INSERT INTO USERS(username,email) VALUES" + usersData + ";")
// .then(()=>{
//   db.none("INSERT INTO IMAGES(image_url) VALUES" + imagesData + ";")
// .then(()=>{
//   db.none("INSERT INTO TAGS(tag_name) VALUES" + tagsData + ";")
// })})