const IntervationLevel = require("../database/models/IntervationLevel");


module.exports = {
    async store(req, res) {
        try {
            const { title } = req.body;

            const intervationLevel = await IntervationLevel.create({ title });

            return res.status(201).send(intervationLevel);
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

    async index(req, res) {
        try {
            const intervationLevel = await IntervationLevel.findAll();
            return res.status(200).send(intervationLevel);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const intervationLevel = await IntervationLevel.findByPk(id);

            if (!intervationLevel)
                return res.status(400).send({ error: "intervation level not found." });

            await intervationLevel.destroy();

            return res.status(200).send({message: "the intervation level has been deleted.", intervationLevel: intervationLevel});
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { title } = req.body;
            const intervationLevel = await IntervationLevel.findByPk(id);

            if (!intervationLevel)
                return res.status(400).send({ error: "intervation level not found." });

            await intervationLevel.setAttributes({ title });
            await intervationLevel.save();

            return res.status(200).send({message: "the intervation level has been changed.", intervationLevel: intervationLevel});
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },
};