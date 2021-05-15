const CategoryInformation = require("../database/models/CategoryInformation")

module.exports = {
  async index(req, res) {
    try {
      // const categoryInformation = await CategoryInformation.findAll();
      const categoryInformation = await ActionCategory.findByPk(action_category_id, {
        include: { association: 'actions' }
    });
      return res.status(200).send(categoryInformation);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }

  },

  async store(req, res) {
    try {
      //:user_id/:approach_subject_id/:intervation_level_id/:action_category_id/:action_id/
      const { user_id, approach_subject_id, intervation_level_id, action_category_id, action_id } = req.params;

      const information = await Information.create({ user_id, approach_subject_id, intervation_level_id, action_id });
      var information_id = information.id;
      const category_information = await CategoryInformation.create({ information_id: information_id, action_category_id: action_category_id});

      return res.status(200).send(information, category_information);
    } catch (err) {
      return res.status(400).send({ error: err.message });
    }

  }

}
