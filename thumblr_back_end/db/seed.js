const pgp = require("pg-promise")({})
const db = pgp("postgres://localhost:5432/thumblr")

module.exports= { db }

const hashPassword = require("../auth/helper")

const faker = require("faker")

let users = [];

for (let i = 0; i < 1; i++){

  let username = faker.name.findName()
 
  let email = faker.internet.email()
  let password_unsalt = faker.internet.password() 
  // console.log(i + " " + username + " " + email)
  let password_salt = hashPassword.createHash(faker.internet.password())
  let str = `('${username}', '${email}','${password_unsalt}','${password_salt}')`
  users.push(str)
}

let tags = [];
for (let i = 0; i < 3; i++) {
  let tags_name = faker.random.word()
  let str = `('${tags_name}')`
  tags.push(str)

}

let images = [];
for (let i = 0; i < 3; i++) {
  let image = faker.random.image()
  let str = `('${image}')`
  images.push(str)
}

const usersData = users.join(",")
const tagsData = tags.join(",")
const imagesData = images.join(",")

//Give some data to the DB
db.none("INSERT INTO USERS(username,email, password_unsalt,password_salt) VALUES" + usersData + ";")
.then(()=>{
  db.none("INSERT INTO IMAGES(image_url) VALUES" + imagesData + ";")
.then(()=>{
  db.none("INSERT INTO TAGS(tag_name) VALUES" + tagsData + ";")
})}).catch(err =>{
  console.log(err)
})