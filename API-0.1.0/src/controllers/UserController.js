const User = require("../database/models/User");

// const { isValidCpf } = require('@brazilian-utils/validators');
// const { validate } = require('email-validator');

module.exports = {
    async store(req, res) {

        try {
            const { name, email } = req.body;

            const user = await User.create({ name, email });

            return res.status(201).send(user);
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    },

    async index(req, res) {
        try {
            const user = await User.findAll();
            return res.status(200).send(user);
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user)
                return res.status(400).send({ error: "user not found." });

            await user.destroy();

            return res.status(200).send({message: "the user has been deleted.", user: user});
        } catch (err) {
            return res.status(400).send({ error: err });
        }

    },

};