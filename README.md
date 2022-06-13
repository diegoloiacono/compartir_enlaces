# compartir_enlaces
###Proyecto 2 HAB - Backend


## Build Setup

don't forget create .env file, variables in .env.example

``` bash
# install dependencies
npm install
# serve with hot reload
npm run dev
# migrate the database from 0
npm run initDB
# load data example in DB
npm run populateDB

```
### SAMU SCRIPT

``` bash
# Samu check Api
npm run check-api
```

## General API Information
* All endpoints return a JSON object with the following format

```javascript
// If everything went ok
{
  status: 'method code',
  data: [{...}]
}
// In case of an error occours
{
  status: 'bad request',
  error: "Error message"
}
```

## HTTP Return Codes
* HTTP `400` return code is used for malformed requests; the issue is on the sender's side.
* HTTP `401` return code is used when trying to access a protected endpoint without providing a JWT.
* HTTP `403` return code is used when trying to access a protected endpoint with an invalid JWT.
* HTTP `500` return code is used for internal errors; the issue is on the API side.

## Public API Endpoints

### User EndPoints

#### Register

``` bash
POST /users
```

Registers a new user.

**Parameters:**

```json
{
  "email" : "valid@email.com",
  "name" : "Username",
  "password" : "anypassword"
}
```

**Response:**

```javascript
{
    "status": "ok",
    "data": {
        "id": 1
    }
}
```
#### Activate User
```
GET /users/activate/:registrationCode
```
Activation code, go to the database and get the code of the users table, this must be null. send code by params :registrationCode
**Response:**
```json
{
  "status": "ok",
  "message": "User activated"
}
```

#### Login

```
POST /login
```

Returns a JWT for an existing user.

**Parameters:**

```json
{
  "email" : "registered@email.com",
  "password" : "validpassword"
}
```

**Response:**

```javascript
{
  "status": "ok",
  "data": {
    "token": "..." // hash token
  }
}
```

### Entries End-points

NOTE: THIS END-POINTS YOU NEED DE JWT TOKEN, THIS TOKEN IS IN LOGIN RESPONSE

#### Send Entrie

```
POST /entries
```

you can send a entrie, you need auth token for this EndPoint ,send JWT for header auth. type of token 'Bearer Token'

**Parameters:**

```json
{
  "title": "...",
  "url": "...",
  "description": "...",
  "userId": "..."
}
```
**Response:**

```javascript
{
  status: "ok",
  data: { 
    id:'...', //id entrie in DB
    title:'...',
    url:'...',
    description:'...', 
    userId:'...'
  }
}
```
### Votes End Points

NOTE: YOU NEED THE JWT TOKEN, SEND JWT BEARER IN AUTH HEADER, JWT IS IN LOGIN RESPONSE

#### send vote of entrie

```bash
POST /vote
```
save vote or like in DB in table votes, you need user id and entrie id, example:

**Parametres:**

```json
{
  "entrieId": 2,
  "userId":1
}
```

**Response:**

```json
{
    "status": "ok",
    "data": {
        "data": 1 // id in DB of vote
    }
}
```
#### Get all votes in DB

``` 
GET /votes
```

get all votes of DB

**Parameters:**

you only need JWT and send the reques

**Response:**
```json
  {
    "status": "ok",
    "data": {
      "data": [
        {
          "id": 1,
          "entry_id": 1,
          "user_id": 2
        }
      ]
    }
  }
```

#### Delete a Vote or like

```
DELETE /vote
```

you can delete or remove a vote in table votes

**Parameters:**

```json
{
    "id": 1 // id the vote in the table votes
}
```

**Response:**
```json
{
  "status": "ok",
  "message": "Entry deleted"
}
```






