const Action = require("../database/models/Action");
const ActionCategory = require("../database/models/ActionCategory");


module.exports = {
    async store(req, res) {
        try {
            const { action_category_id } = req.params;
            const { information } = req.body;

            const action = await Action.create({ information, action_category_id });

            return res.status(201).send(action);
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

    async index(req, res) {
        try {
          const { action_category_id } = req.params;

          const actionCategory = await ActionCategory.findByPk(action_category_id, {
              include: { association: 'actions' }
          });
            return res.status(200).send(actionCategory);
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