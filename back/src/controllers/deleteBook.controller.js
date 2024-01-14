import { db } from "../config/firebase.js"

const deleteBook = async (id) => {
    const book = await db.collection('books').doc(id).get()

    if (!book._fieldsProto) throw new Error("This book doesn't exist")

    const bookDeleted = await db.collection('books').doc(id).delete()

    return bookDeleted
}

export default deleteBook