const Subtitle = require("../database/models/Subtitle");
const Action = require("../database/models/Action");

module.exports = {
    async store(req, res) {
        try {

            const { name, meaning } = req.body;
            const { action_id } = req.params;

            const action = await Action.findByPk(action_id);

            if(!action)
                throw new Error("action not found.");


            const [ subtitle ] = await Subtitle.findOrCreate({ where: {name, meaning} });

            await action.addSubtitle(subtitle);

            return res.status(201).send(subtitle);

        } catch (err) {
            return res.status(400).send({ error: err.message.message });
        }

    },
    async storeOnlySub(req, res) {
        try {
            const { name, meaning } = req.body;

            const subtitle = await Subtitle.create({name, meaning})

            return res.status(201).send({subtitle})
            
        } catch (err) {
            return res.status(400).send({ error: err.message.message });
        }
    },


    async index(req, res) {
        try {
            const subtitle = await Subtitle.findAll();
            return res.status(200).send(subtitle);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const subtitle = await Subtitle.findByPk(id);

            if (!subtitle)
                return res.status(400).send({ error: "subtitle not found." });

            await subtitle.destroy();

            return res.status(200).send({ message: "the subtitle has been deleted.", subtitle: subtitle });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, meaning } = req.body;
            const subtitle = await Subtitle.findByPk(id);

            if (!subtitle)
                return res.status(400).send({ error: "subtitle not found." });

            subtitle.setAttributes({ name, meaning });
            await subtitle.save();

            return res.status(200).send({ message: "the subtitle has been changed.", subtitle: subtitle });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};