import express from "express"
const app = express.Router()

app.get('/', (req, res) => {
    res.send("hello world this")
})

export default app