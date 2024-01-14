import app from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
    console.log('Server on port: ', PORT);
})