const Action = require("../database/models/Action");
const Subtitle = require('../database/models/Subtitle');


module.exports = {
    async store(req, res) {
        try {
            const { information } = req.body;

            const action = await Action.create({ information });

            return res.status(201).send(action);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async index(req, res) {
        try {

            const action = await Action.findAll({
                include: {association: 'subtitles'},
            });
            return res.status(200).send(action);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async get(req, res) {
        try {
            const {id} = req.params;
            const action = await Action.findAll({
                where: { id: id },
                include: {
                  association: 'subtitles',
                },
            });
            return res.status(200).send(action);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const action = await Action.findByPk(id);

            if (!action)
                return res.status(400).send({ error: "action not found." });

            await action.destroy();

            return res.status(200).send({ message: "the action has been deleted.", action: action });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async deleteSubtitle(req, res) {
        try {
            const { action_id, subtitle_id } = req.params;
            const subtitle = await Subtitle.findByPk(subtitle_id)

            if(!subtitle)
                throw new Error("subtitle not found.");

            const action = await Action.findByPk(action_id)

            if(!action)
                throw new Error("action not found.");

            await action.removeSubtitle(subtitle);

            return res.status(200).send({ message: "the subtitle has been deleted."});


        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { information } = req.body;
            const action = await Action.findByPk(id);

            if (!action)
                return res.status(400).send({ error: "action not found." });

            action.setAttributes({ information });
            await action.save();

            return res.status(200).send({ message: "the action has been changed.", action: action });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};