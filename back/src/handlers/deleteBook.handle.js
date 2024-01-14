import deleteBook from '../controllers/deleteBook.controller.js'

const deleteBookHandle = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) return res.status(404).json({ message: "ID is neccesary" })

        const bookDeleted = await deleteBook(id)

        if (!bookDeleted) return res.status(400).json({ message: "Cannot delete this book" })

        return res.status(201).json({ message: "The book was removed successfully" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Error Server: " + error.message })
    }
}

export default deleteBookHandle