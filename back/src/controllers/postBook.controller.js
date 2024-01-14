import { db } from "../config/firebase.js"

const postBook = async ({ pages, image, author, genre, rating, description, publisher, language, title }) => {
    const query = await db.collection('books').where('title', '==', title).where("author", "==", author).get()

    if (!query.empty) throw new Error(`${author} already posted a book with that title`)

    const postDate = new Date()

    const newBook = await db.collection("books").add({
        title: title,
        author: author,
        description: description,
        image: image,
        pages: pages,
        genre: genre,
        rating: rating,
        publisher: publisher,
        language: language,
        publicationDate: postDate
    })

    return newBook
}

export default postBook