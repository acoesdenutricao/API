const DocumentCategory = require("../database/models/DocumentCategory");

module.exports = {
    async store(req, res) {
        try {

            const { category } = req.body;

            const documentCategory = await DocumentCategory.create({ category });

            return res.status(201).send(documentCategory);

        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {
            const documentCategory = await DocumentCategory.findAll();
            return res.status(200).send(documentCategory);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const documentCategory = await DocumentCategory.findByPk(id);

            if (!documentCategory)
                return res.status(400).send({ error: "document category not found." });

            await documentCategory.destroy();

            return res.status(200).send({message: "the document category has been deleted.", documentCategory: documentCategory});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { category } = req.body;
            const documentCategory = await DocumentCategory.findByPk(id);

            if (!documentCategory)
                return res.status(400).send({ error: "document category not found." });

            documentCategory.setAttributes({ category });
            await documentCategory.save();

            return res.status(200).send({message: "the document category has been changed.", documentCategory: documentCategory});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};