# API Endpoints

## HTML API

### Root
* `GET /`
  * loads React web app

## JSON API

### Users
* `GET /api/users`

* `GET /api/users/:userId`
  * Fetches single existing user profile

* `POST /api/users`
  * Creates new user

* `PATCH /api/users/:userId`
  * Allows user to update their profile

### Posts
* `GET /api/:userId/posts`
 * Get all posts from specific users
 
* `GET /api/:tag_id/posts`
 * Get all posts from specific tags
 
* `POST /api/posts`
 * Creates new posts
     * Creates new tags

* `DELETE /api/posts/:id`
  * Deletes post

### Answers
*Answers are required in order to compare users for matching*
* `POST /api/answer`
  * User answers a specific question
* `GET /api/answers`
  * Answers are fetched for user compatibility
* `PATCH /api/answers/:answerId`
  * User can change their answers