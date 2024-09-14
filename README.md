## Book Record  Management System:

## Routes and EndPoints

## /users
POST: Create a new user
Get: Get all the list of users

## /users/{id}
GET: Get a user by ID
PUT: Update a user by their ID
DELETE: Delete a user by id (chk if he/she still has an issued book && is there any fine to be paid)

## /user/subscription-details/{id}
GET: Get user subscription details
    >> Date of subscription
    >> Valid till
    >> Fine if any

## /books
GET: Get all books
POST: Create/Add a new book

## /book/id
GET: Get a book by id
PUT: Update a book by id

## /book/issued
GET: Get all issued books

## /book/issued/withFine
GET: Get all books with fine

# Subscription Type:
    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

# Cmds:
    >> npm init
    >> npm i express
    >> npm i nodemon --save-dev

    >> npm run dev