const express = require("express")
const app = express()
app.use(express.json())

const http = require("http")
const server = http.createServer(app)

const cors = require("cors")
app.use(cors())

const Routes = require("./routes")

app.use(Routes)

const porta = 3333

server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})