**USERS**  TABLE

| **Column Name** | **Data Type** | **Details** |
| --- | --- | --- |
| Id | INT | SERIAL, PRIMARY KEY |
| User\_name | VARCHAR | NOT NULL UNIQUE |
| Email | VARCHAR | NOT NULL UNIQUE |
| Password\_digest | VARCHAR | NOT NULL  |
| Timestamp | TIMESTAMP |   |
| Last\_login | TIMESTAMP |   |

_Each user has a profile with many posts, many followers…_

_ _

**PROFILE**  TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | INT | SERIAL NOT NULL PRIMARY KEY |   |
| User\_Id | INT | FOREIGN KEY NOT NULL | REFERENCE TO USERS(ID) ON DELETE CASCADE |
| Profile\_URL | VARCHAR | URL |   |
| Header\_URL | VARCHAR | URL |   |
| First\_name | VARCHAR |   |   |
| Last\_name | VARCHAR |   |   |

**FOLLOWING**  TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | INT | NOT NULL SERIAL PRIMARY KEY |   |
| Follower\_id | INT | FOREIGN KEY NOT NULL | REFERENCE TO USERS(id) |
| Following\_id | INT | FOREIGN KEY NOT NULL | REFERENCE TO USERS(id) |

_Each users has Multiple followers and can be followed by multiples users_

**TAGs**  TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | INT | SERIAL NOT NULL PRIMARY KEY |   |
| Tag\_name | VARCHAR |   |   |

**POSTS**  TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |   |
| --- | --- | --- | --- | --- |
| Id | INT | NOT NULL SERIAL PRIMARY KEY |   |   |
| Type | CHAR | NOT NULL |   | Def: text, image(s), quote, video, links |
| text\_title | VCHAR |   |   |   |
| text\_body | VCHAR |   |   |   |
|   |   |   |   |   |
| Author\_id | INT | FOREIGN KEY | REFERENCE TO USERS(id) ON DELETE CASCADE |   |
| Reblog\_id | INT |   | REFERENCE TO POSTS(id) ON DELETE SET NULL |   |
| Publish\_date | TIMESTAMP |   |   | When was this published |
|   |   |   |   |   |
| video\_url | VCHAR |   |   |   |
| video\_caption | VCHAR |   |   |   |
| video\_body | VCHAR |   |   |   |
|   |   |   |   |   |
| audio\_caption | VCHAR |   |   |   |
| audio\_url | VCHAR |   |   |   |
| audio\_source | VCHAR |   |   |   |
|   |   |   |   |   |
| quote\_text | VCHAR |   |   |   |
| quote\_source | VCHAR |   |   |   |
| link\_url | VCHAR |   |   |   |

**POSTS**  JOIN TAGS TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | INT | NOT NULL SERIAL PRIMARY KEY |   |
| Post\_id | INT | FOREIGN KEY NOT NULL | REFERENCE TO POSTS(id) ON DELETE CASCADE |
| Tag\_id | INT | FOREIGN KEY NOT NULL | REFERENCE TO TAGS(id) |

**LIKES**  TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | INT | NOT NULL PRIMARY KEY SERIAL |   |
| Post\_id | INT | FOREIGN KEY | REFERENCE TO POST(id) ON DELETE CASCADE |
| User\_id | INT | FOREIGN KEY | REFERENCE TO USERS(id) ON DELETE SET TO NULL |

**IMAGE**  JOIN TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | INT | NOT NULL PRIMARY KEY SERIAL | \*not needed |
| Poster\_id | INT | FOREIGN KEY NOT NULL | REFERENCE TO USERS(id) |
| Image\_url | VARCHAR | NOT NULL |
 |