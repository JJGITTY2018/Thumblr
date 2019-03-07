const dashboardReducer = (oldstate = {follower_posts:
  [{
            "post_id": "",
            "post_type":"",
            "text_title": "",
            "text_body": "",
            "author_id": "",
            "tags": [],
            "author_username": "",
            "publish_date": "",
            "media_url": "",
            "likes_by_user_id": [],
            "likes_by_user_name": [],
            "author_header_img": "",
            "author_profile_img": ""
  }]
}, action) => {
  Object.freeze(oldstate);
  // console.log("@Login_Reducer")
  switch (action.type) {
    case "FETCH_FOLLOWER_LIST":
      return {
        ...oldstate,
        followers: action.payload
      }
      case "FETCH_FOLLOWERS_POSTS":
      return {
        ...oldstate,
        follower_posts:action.payload
      }
    default:
      return oldstate
  }
}


export default dashboardReducer
