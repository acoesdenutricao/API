// const Cliente = require("../database/models/Cliente");

// const { isValidCpf } = require('@brazilian-utils/validators');
// const { validate } = require('email-validator');

module.exports = {
    async listar(req, res) {
        return res.status(200).send({ Teste: "testando resposta da API" });
    }, 

};