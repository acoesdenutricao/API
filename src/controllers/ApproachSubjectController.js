const ApproachSubject = require("../database/models/ApproachSubject");


module.exports = {
    async store(req, res) {
        try {
            const { subject, icon_name } = req.body;

            const approachSubject = await ApproachSubject.create({ subject, icon_name });


            return res.status(201).send(approachSubject);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },

    async get(req, res) {
        try {
            const { id } = req.params;
            const approachSubject = await ApproachSubject.findByPk(id);

            if (!approachSubject)
                return res.status(400).send({ error: "approach subject not found." });
            
            return res.status(200).send(approachSubject);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async index(req, res) {
        try {
            const approachSubject = await ApproachSubject.findAll();
            return res.status(200).send(approachSubject);
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            const approachSubject = await ApproachSubject.findByPk(id);

            if (!approachSubject)
                return res.status(400).send({ error: "intervation level not found." });

            await approachSubject.destroy();

            return res.status(200).send({message: "the intervation level has been deleted.", approachSubject: approachSubject});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }
    },


    async update(req, res) {
        try {
            const { id } = req.params;
            const { subject, icon_name } = req.body;
            const approachSubject = await ApproachSubject.findByPk(id);

            if (!approachSubject)
                return res.status(400).send({ error: "intervation level not found." });

            approachSubject.setAttributes({ subject, icon_name });
            await approachSubject.save();

            return res.status(200).send({message: "the intervation level has been changed.", approachSubject: approachSubject});
        } catch (err) {
            return res.status(400).send({ error: err.message });
        }

    },
};