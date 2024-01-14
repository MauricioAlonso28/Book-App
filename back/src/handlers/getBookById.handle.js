import getBookById from "../controllers/getBookById.controller.js"

const getBookByIdHandle = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) return res.status(404).json({ message: "ID is neccesary" })

        const bookFound = await getBookById(id)

        if (!bookFound) return res.status(401).json({ message: "Book not found" })

        return res.status(201).json(bookFound)
    } catch (error) {
        return res.status(500).json({ message: "Internal Error Server: " + error.message })
    }
}

export default getBookByIdHandle