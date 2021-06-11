const ExternalLink = require("../database/models/ExternalLink");
const User = require('../database/models/User');
const DocumentCategory = require('../database/models/DocumentCategory');


module.exports = {
    async store(req, res) {
        try {
            const { name, url } = req.body;
            const { user_id, document_category_id } = req.params;

            const user = await User.findByPk(user_id);

            if (!user)
                return res.status(400).send({ error: "user not found." });

            const documentCaregory = await DocumentCategory.findByPk(document_category_id);
            if (!documentCaregory)
                return res.status(400).send({ error: "document category not found." });


            const externalLink = await ExternalLink.create({ name, url, user_id, document_category_id });

            return res.status(201).send(externalLink);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async indexFromUsers(req, res) {
        try {
            const { user_id } = req.params;

            const user = await User.findByPk(user_id, {
                include: { association: 'user_external_links' }
            });
            return res.status(200).send(user);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async indexFromCategory(req, res) {

        try {
            const { document_category_id } = req.params;

            const documentCategory = await DocumentCategory.findByPk(document_category_id, {
                include: { association: 'category_external_links' }
            });
            return res.status(200).send(documentCategory);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const externalLink = await ExternalLink.findByPk(id);

            if (!externalLink)
                return res.status(400).send({ error: "external link not found." });

            await externalLink.destroy();

            return res.status(200).send({ message: "the external link has been deleted.", externalLink: externalLink });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, url } = req.body;
            const externalLink = await ExternalLink.findByPk(id);

            if (!externalLink)
                return res.status(400).send({ error: "external link not found." });

            externalLink.setAttributes({ name, url });
            await externalLink.save();

            return res.status(200).send({ message: "the external link has been changed.", externalLink: externalLink });
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};