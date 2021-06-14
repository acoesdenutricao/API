const Information = require("../database/models/Information");
const CategoryInformation = require("../database/models/CategoryInformation")

module.exports = {
  async index(req, res) {
    try {
      const informations = await Information.findAll();
      return res.status(200).send(informations);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },

  async indexCategoryInformation(req, res) {
    try {
      const { approach_subject_id, intervation_level_id } = req.params;
      const informations = await Information.findAll({
        where: { approach_subject_id, intervation_level_id },
        include: [{
          model: CategoryInformation,
          required: true,
          as: 'information_categories',
          include: {
            association: 'category_information_category',
          },
        }]
      });
      return res.status(200).send(informations);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },

  async indexAction(req, res) {
    try {
      const { category_information_id } = req.params;
      const action = await CategoryInformation.findAll({
        where: { id: category_information_id },
        include: {
          association: 'category_information_actions',
        },
      });
      return res.status(200).send(action);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }
  },

  async store(req, res) {
    try {
      //:user_id/:approach_subject_id/:intervation_level_id/:action_category_id/:action_id/
      const { user_id, approach_subject_id, intervation_level_id, action_category_id, action_id } = req.body;

      const [information] = await Information.findOrCreate({ where: { user_id, approach_subject_id, intervation_level_id } });
      var information_id = information.id;
      const category_information = await CategoryInformation.create({ action_id: action_id, information_id: information_id, action_category_id: action_category_id });

      return res.status(201).send({ information, category_information });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }

  },

  async delete(req, res) {
    try {
      //:user_id/:approach_subject_id/:intervation_level_id/:action_category_id/:action_id/
      const { id } = req.params;
      const category_information = await CategoryInformation.findByPk(id);

      if (!category_information)
        return res.status(400).send({ error: "category information not found." });

      await category_information.destroy();

      return res.status(200).send({ message: "Category information has been removed", category_information });
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }

  }


}
