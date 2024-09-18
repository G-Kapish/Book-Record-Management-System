const express = require("express");
const {users} = require("../data/users.json")
const {books} = require("../data/books.json")

const {UserModel, BookModel} = require("../modles")

const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: None
 */
router.get("/",(req, res)=>{
    res.status(200).json({
        success: true,
        data: books,
    })
})

/**
 * Route: /books/:id
 * Method: GET
 * Description: Get books by their id
 * Access: Public
 * Parameters: id
 */
router.get("/:id",(req, res)=>{
    const {id} = req.params;
    const book = users.find((each)=> each.id ===id);
    if(!book)
        return res.status(404).json({
            success: false,
            message: "Book Not Found"
    })
    return res.status(200).json({
        success: true,
        data: book
    })
})

/**
 * Route: /books
 * Method: POST
 * Description: Create/Add a new book
 * Access: Public
 * Parameters: None
 */
router.post("/", (req, res)=>{
    const {id, name, author, genre, price, publisher} =  req.body;

    const book = books.find((each)=> each.id === id);
    
    if(book){
        return res.status(404).json({
            success: false,
            message: "Book exists with the given ID"
        })
    }
    books.push({id, name, author, genre, price, publisher});
    return res.status(201).json({
        success: true,
        data: books,
    })
})

/**
 * Route: /books/:id
 * Method: PUT
 * Description: Updating a book by their ID
 * Access: Public
 * Parameters: ID
 */
router.put("/:id", (req, res)=>{
    const {id} = req.params;
    const {data} = req.body;
    const book = books.find((each)=> each.id ===id);
    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book Not Found"
    })}

    const UpdateBook = books.map((each)=>{
        if(each.id === id){
            return{
                ...each,
                ...data 
            }
        }
        return each;
    })
    return res.status(200).json({
        success: true,
        data: UpdateBook
    })
})

/**
 * Route: /books/:id
 * Method: DELETE
 * Description: Deleting a book by their ID
 * Access: Public
 * Parameters: ID
 */
router.delete("/:id", (req,res)=>{
    const {id} = req.params;
    const book = books.find((each)=> each.id ===id);
    if(!book){
        return res.status(404).json({
            success: false,
            message: "Book Not Found"
    })}

    const index = books.indexOf(book);
    books.splice(index,1);

    return res.status(200).json({
        success: true,
        data: books
    })
})

module.exports = router;