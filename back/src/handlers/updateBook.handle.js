import updateBook from "../controllers/updateBook.controller.js"

const updateBookHandle = async (req, res) => {
    const { pages, author, genre, rating, description, publisher, language, title, image } = req.body
    const { id } = req.params


    try {
        if (!pages || !author || !genre || !rating || !description || !publisher || !language || !title || !image) return res.status(404).json({ message: "Neccesary data missing!" })
        if (!id) return res.status(404).json({ message: "ID is neccesary" })

        const updatedBook = await updateBook({ id, pages, author, genre, rating, description, publisher, language, title, image })

        if (!updatedBook) return res.status(400).json({ message: "Cannot edit this book" })

        return res.status(201).json(updatedBook)
    } catch (error) {
        return res.status(500).json({ message: "Internal Error Server: " + error.message })
    }
}

export default updateBookHandle