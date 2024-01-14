import { Router } from 'express';

import getBooksHandle from '../handlers/getBooks.handle.js'
import getBookByIdHandle from '../handlers/getBookById.handle.js'
import postBookHandle from '../handlers/postBook.handle.js';
import updateBookHandle from '../handlers/updateBook.handle.js';
import deleteBookHandle from '../handlers/deleteBook.handle.js';

const booksRouter = Router();

booksRouter.get("/books", getBooksHandle)
booksRouter.get("/books/:id", getBookByIdHandle)
booksRouter.put("/books/:id", updateBookHandle)
booksRouter.post("/books", postBookHandle)
booksRouter.delete("/books/:id", deleteBookHandle)

export default booksRouter