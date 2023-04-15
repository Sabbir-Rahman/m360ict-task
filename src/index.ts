import express from 'express'
import { logInfo } from '../logger/customLogger'
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.listen(port, async () => {
  logInfo('index.ts', './index.ts', `Server running on ${port}`)
})
