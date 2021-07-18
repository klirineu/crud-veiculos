const { expect } = require("chai")
const chai = require("chai")
const chaiHttp = require("chai-http")
const should = require("should")

chai.use(chaiHttp)

describe("Veiculos", () => {
  describe("/GET Veiculos", () => {
    it("Testando GET todos os Veiculos", (done) => {
      chai.request("http://localhost:3333")
      .get("/veiculos")
      .end(() => {
        done()
    })
    })
  })

  describe("/GET/:id veiculo", () => {
    it("GET em veiculo por ID", (done) => {
      let id = "1"
      chai.request("http://localhost:3333")
      .get("/veiculos/" + id)
      .end(() => {
        done()
      })
    })
  })

  describe("/POST Veiculo", () => {
    it("Verificar o cadastro de Veiculo", (done) => {
      let veiculo = {
        id: 3,
        carro: {
          placa: "ABCD1D23",
          chassi: "52K XrGbv2 Dy uP4045",
          renavam: "60000000-0",
          modelo: "ONIX PLUS",
          marca: "Chevrolet",
          ano: 2022
        }
      }
      chai.request("http://localhost:3333")
      .post("/veiculo")
      .send(veiculo)
      .end(() => {
        done()
      })
    })
  })

  describe("/PUT/:id veiculo", () => {
    it("Verificar update de veiculo", (done) => {
      
      let veiculo = {
        id: 3,
        carro: {
          placa: "ABCD1D23",
          chassi: "52K XrGbv2 Dy uP4045",
          renavam: "60000000-0",
          modelo: "ONIX PLUS",
          marca: "Chevrolet",
          ano: 2022
        }
      }
      let id = "3"
      chai.request("http://localhost:3333")
      .put("/veiculos/" + id)
      .send(veiculo)
      .end(() => {
        done()
      })
    })
  })

  describe("/DELETE/:id veiculo", () => {
    it("Testando delete de veiculo", (done) => {
      let id = "3"
      chai.request("http://localhost:3333")
      .delete("/veiculos/" + id)
      .end(() => {
        done()
      })
    })
  })

})