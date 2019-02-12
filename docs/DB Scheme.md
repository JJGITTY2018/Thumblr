**USERS** TABLE

| **Column Name** | **Data Type** | **Details** |
| --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |
| Username | String | Not null, indexed, unique |
| Email | String | Not null, indexed, unique |
| Password | String | Not null |

Each user has a profile with many posts, many followers...

------

**PROFILE** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| User\_id | Integer | Foreign key, not null | Belongs to USER Table |
| Profile\_photo | Text | URL |   |
| Header\_photo | Text | URL |   |
| Name | Text | URL | |

One profile belongs to one user

-----

**FOLLOWING** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| User\_id | Integer | Foreign key, not null | USERS |
| Following\_id | Integer | Foreign key, not null | USERS |

One users can follow many users

-----

**TAGs** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| Name | Text |   |   | |


-------

**POSTS** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| Post_type | String | Not null |  Default to text |
| text_title | Text | Not null |   |
| text_body | Text | Not null |   |
| | | |
| PostTag\_id | Integer | Foreign Key | POST TAG Table - which tags folder *maynot need |
| User\_id | Interger | Foreign Key | USERS Table - post by which user |
| Reblog\_id | Integer |   | POST ID |
|Timestamp | Text | Not Null | When was this post published|
|||||
|video_url| String | | external URL if type .= Video|
|video_title| String | | |
|video_body| String | | |
| | | | |
|audio_title| String | | |
|audio_url| String | | external URL if type .= audio|
|audio_body| String | | |
|audio_source| String | | |
|||||
|quote_text| string |  |   |
|quote_source| string |  |   |
| link_url | string | | if type = LINK|

------

**POSTS** JOIN TAGS TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |  *maynot need |
| Post\_id | Integer | Foreign Key, Not Null | Post Table |
| Tags\_id | Integer | Foreign Key, Not Null | Tags Table |


------
**LIKES** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| Post\_id | Integer | Foreign Key, Not Null | Post Table |
| User\_id | Integer | Foreign Key, Not Null | User Table |

**IMAGE** JOIN TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| user_id | Integer | Foreign Key, Not Null | create by which users |
| image_url | String | NOT NULL |  | |

