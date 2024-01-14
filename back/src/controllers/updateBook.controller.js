import { db } from "../config/firebase.js"

const updateBook = async ({ id, pages, author, genre, rating, description, publisher, language, title, image }) => {
    const book = await db.collection('books').doc(id).get()

    const dateBook = book.data();

    const newBook = {
        id,
        pages,
        author,
        genre,
        rating,
        description,
        publisher,
        language,
        title,
        image,
        publicationDate: dateBook.publicationDate
    }

    await db.collection('books').doc(id).update(newBook)

    const updatedBook = await db.collection('books').doc(id).get()

    const updatedBookOfficial = {
        id: updatedBook.id,
        ...updatedBook.data()
    }

    return updatedBookOfficial
}

export default updateBook