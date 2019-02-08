**USERS** TABLE

| **Column Name** | **Data Type** | **Details** |
| --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |
| Username | String | Not null, indexed, unique |
| Email | String | Not null, indexed, unique |
| Password | String | Not null |

_Each user has a profile with many posts, many followers,_
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

**FOLLOWERS** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| User\_id | Integer | Foreign key, not null | USERS |
| Follower\_id | Integer | Foreign key, not null | USERS |

One users has many users

-----

**TAGs** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| Name | Text |   |   |


-------

**POSTS** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| Type | String | Not null |   |
| Title | Text | Not null |   |
| Body | Text | Not null |   |
| Postag\_id | Integer | Foreign Key | POST TAG Table |
| User\_id | Interger | Foreign Key | USERS Table |
| CopyFrom\_Post | Integer |   | POST ID |

------

**POSTS** – TAGS TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| Post\_id | Integer | Foreign Key, Not Null | Post Table |
| Tags\_id | Integer | Foreign Key, Not Null | Tags Table |


------
**LIKES** TABLE

| **Column Name** | **Data Type** | **Details** | **Relation to** |
| --- | --- | --- | --- |
| Id | Integer SERIAL | Not null, primary key |   |
| Post\_id | Integer | Foreign Key, Not Null | Post Table |
| User\_id | Integer | Foreign Key, Not Null | User Table |