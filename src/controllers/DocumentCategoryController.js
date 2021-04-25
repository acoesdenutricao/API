const DocumentCategory = require("../database/models/DocumentCategory");

module.exports = {
    async store(req, res) {
        try {

            const { category } = req.body;

            const documentCategory = await DocumentCategory.create({ category });

            return res.status(201).send(documentCategory);

        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

    async index(req, res) {
        try {
            const documentCategory = await DocumentCategory.findAll();
            return res.status(200).send(documentCategory);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    },
};