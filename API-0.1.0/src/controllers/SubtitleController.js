const Subtitle = require("../database/models/Subtitle");

module.exports = {
    async store(req, res) {
        try {

            const { name, meaning } = req.body;

            const subtitle = await Subtitle.create({ name, meaning });

            return res.status(201).send(subtitle);

        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

    async index(req, res) {
        try {
            const subtitle = await Subtitle.findAll();
            return res.status(200).send(subtitle);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const subtitle = await Subtitle.findByPk(id);

            if (!subtitle)
                return res.status(400).send({ error: "subtitle not found." });

            await subtitle.destroy();

            return res.status(200).send({message: "the subtitle has been deleted.", subtitle: subtitle});
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, meaning } = req.body;
            const subtitle = await Subtitle.findByPk(id);

            if (!subtitle)
                return res.status(400).send({ error: "subtitle not found." });

            await subtitle.setAttributes({ name, meaning });
            await subtitle.save();

            return res.status(200).send({message: "the subtitle has been changed.", subtitle: subtitle});
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },
};