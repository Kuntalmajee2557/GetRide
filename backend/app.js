import express, { urlencoded } from "express"
const app = express.Router()
import userRoutes from './routes/user.routes.js'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send("hello world this")
})

export default app