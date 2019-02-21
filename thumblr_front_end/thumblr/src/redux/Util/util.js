import axios from "axios"

const axioSearch = () => {
  axios
    .get("http://localhost:1337/posts/tag/apple").then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
}


module.exports = {
  axioSearch
}