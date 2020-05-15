import express from 'express'

const app = express()
const port = 8081

app.use(express.static('public'))

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
