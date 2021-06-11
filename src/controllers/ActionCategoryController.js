const ActionCategory = require("../database/models/ActionCategory");


module.exports = {
    async store(req, res) {
        try {
            const { category } = req.body;

            const actionCategory = await ActionCategory.create({ category });

            return res.status(201).send(actionCategory);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {
            const actionCategory = await ActionCategory.findAll();
            return res.status(200).send(actionCategory);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const actionCategory = await ActionCategory.findByPk(id);

            if (!actionCategory)
                return res.status(400).send({ error: "action category not found." });

            await actionCategory.destroy();

            return res.status(200).send({message: "the action category has been deleted.", actionCategory: actionCategory});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { category, range } = req.body;
            const actionCategory = await ActionCategory.findByPk(id);

            if (!actionCategory)
                return res.status(400).send({ error: "action category not found." });

            actionCategory.setAttributes({ category, range });
            await actionCategory.save();

            return res.status(200).send({message: "the action category has been changed.", actionCategory: actionCategory});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};