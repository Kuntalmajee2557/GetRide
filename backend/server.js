import express from "express"
import app from "./app.js"
const port = process.env.PORT || 3000
import connectToDb from "./db/db.js"

connectToDb()
const server = express()


server.use('/', app)

server.listen(port, console.log(`listening ${port}`))