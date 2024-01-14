import getBooks from '../controllers/getBooks.controller.js'

const getBooksHandle = async (req, res) => {
    try {
        const books = await getBooks()

        if (!books) return res.status(400).json({ message: "There is a problem to get books" })

        return res.status(201).json(books)
    } catch (error) {
        return res.status(500).json({ message: "Internal Error Server: " + error.message })
    }
}

export default getBooksHandle