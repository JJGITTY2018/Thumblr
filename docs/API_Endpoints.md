# API Endpoints

## HTML API

### Root
* `GET /`
  * loads React web app

## JSON API

### Users
* `GET /api/users`

* `GET /api/users/:userid`
  * Fetches a existing user profile

* `POST /api/users`
  * Creates new user

* `PATCH /api/users/:userId`
  * Allows user to update their profile

### Posts

* `GET /api/posts/:id`
 * Get a post from the given ID

* `GET /api/posts/:users_id/type/:type_id`
 * Get all post based from a user, based on type_id
 
* `GET /api/posts/users/:user_id`
 * Get all posts from specific users
 
* `GET /api/posts/tags/:tag_id`
 * Get all posts from based on tags
 
* `POST /api/posts/`
 * Creates new posts
 
* `DELETE /api/posts/:id`
  * Deletes the post

### Tags
* `GET /api/tags/:id`
  * GET name of the tag
  
* `POST /api/tags/:name`
 * Creates new tags 
 

 ### Images/Videos
* `GET /api/post/:id`/images
  * GET name of the tag

 
 
 
 
 