const Information = require("../database/models/Information");

module.exports = {
  async index(req, res) {
    try {
      const informations = await Information.findAll();
      return res.status(200).send(informations);
    } catch (err) {
      return res.status(400).send({ error: err });
    }

  }
}
