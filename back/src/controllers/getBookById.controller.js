import { db } from "../config/firebase.js"

const getBookById = async (id) => {
    const book = await db.collection('books').doc(id).get()

    const bookFound = {
        id: book.id,
        ...book.data(),
    }

    return bookFound
}

export default getBookById