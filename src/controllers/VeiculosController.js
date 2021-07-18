const veiculos = require("../db/veiculos")

module.exports = {
  async index(req, res) {
    try {
      return res.json(veiculos)
    } catch(error) {
      return res.json(error)
    }
  },
  async indexOne(req, res) {
    try {
      const { id } = req.params
      const i = id - 1
      const result = veiculos[i]

      if (!result) {
        return res.status(400).json({error: "Esse carro não existe no nosso sistema"})
      }

      return res.json(result)
    } catch(error) {
      return res.json(error)
    }
  },
  async store(req, res) {
    try {
      const { placa , chassi, renavam, modelo, marca, ano } = req.body

      var id = veiculos.length 
      

      if (placa === undefined || chassi === undefined || renavam === undefined || modelo === undefined || marca === undefined || ano === undefined) {
        return res.status(400).json({ error: "Dados faltando. Todos os campos são obrigatórios" })
      }

      id += 1

      const veiculo = {
        id,
        carro: {
          placa,
          chassi,
          renavam,
          modelo,
          marca,
          ano
        }
      }

      veiculos.push(veiculo)
      
      return res.json(veiculo)
    } catch(error) {
      return res.json(error)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { placa , chassi, renavam, modelo, marca, ano } = req.body

      if (placa === undefined || chassi === undefined || renavam === undefined || modelo === undefined || marca === undefined || ano === undefined) {
        return res.status(400).json({ error: "Dados faltando. Todos os campos são obrigatórios" })
      }

      const i = id - 1

      const veiculo = {
        id: i + 1,
        carro: {
          placa,
          chassi,
          renavam,
          modelo,
          marca,
          ano
        }
      }

      veiculos[i] = veiculo

      return res.json(veiculos)
    } catch(error) {
      return res.json(error)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params
      const i = id - 1
    
      veiculos.splice(i, 1)
    
      return res.json({ message: "O veículo foi deletado do nosso sistema" })
    } catch(error) {
      return res.json(error)
    }
  },


}