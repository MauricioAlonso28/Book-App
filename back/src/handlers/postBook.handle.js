import postBook from "../controllers/postBook.controller.js"

const postBookHandle = async (req, res) => {
    const { pages, author, genre, rating, description, publisher, language, title, image } = req.body

    try {
        if (!pages || !author || !genre || !rating || !description || !publisher || !language || !title || !image) return res.status(404).json({ message: "Neccesary data missing!" })

        const newBook = await postBook({ pages, author, genre, rating, description, publisher, language, title, image })

        if (!newBook) return res.status(400).json({ message: "Cannot create a book" })

        return res.status(201).json({ message: "The book was created succesfully!" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Error Server: " + error.message })
    }
}

export default postBookHandle