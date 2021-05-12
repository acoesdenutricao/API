const Action = require("../database/models/Action");


module.exports = {
    async store(req, res) {
        try {
            const { information } = req.body;

            const action = await Action.create({ information });

            return res.status(201).send(action);
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

    async index(req, res) {
        try {

          const action = await Action.findAll();
            return res.status(200).send(action);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const action = await Action.findByPk(id);

            if (!action)
                return res.status(400).send({ error: "action not found." });

            await action.destroy();

            return res.status(200).send({message: "the action has been deleted.", action: action});
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { information } = req.body;
            const action = await Action.findByPk(id);

            if (!action)
                return res.status(400).send({ error: "action not found." });

            await action.setAttributes({ information });
            await action.save();

            return res.status(200).send({message: "the action has been changed.", action: action});
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },
};