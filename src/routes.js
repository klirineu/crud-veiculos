const express = require("express")

const VeiculosController = require("./controllers/VeiculosController")

const Routes = express.Router()

Routes.get("/veiculos", VeiculosController.index)

Routes.get("/veiculos/:id", VeiculosController.indexOne)

Routes.post("/veiculos", VeiculosController.store)

Routes.put("/veiculos/:id", VeiculosController.update)

Routes.delete("/veiculos/:id", VeiculosController.delete)

module.exports = Routes