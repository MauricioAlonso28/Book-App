import { db } from "../config/firebase.js"

const getBooks = async () => {
    const request = await db.collection('books').get()
    const { docs } = request

    const books = docs.map((book) => {
        return {
            id: book.id,
            ...book.data()
        }
    })

    return books
}

export default getBooks