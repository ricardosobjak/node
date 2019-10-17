const User = require('../models/User');

/**
 * 
 *   index: Listar todos registros;
 *   show: Exibir um registro;
 *   store: Criar novo registro;
 *   update: Alterar um registro;
 *   destroy: Remover um registro
 */
module.exports = {
    async store(req, res) {
        const json = req.body;
        let user = await User.findOne({ mail: json.mail });

        if (!user) {
            user = await User.create(json);
        }

        return res.json(user);
    },

    async show(req, res) {
        const { userid } = req.headers;

        const user = await User.find({ _id: userid })

        return res.json(user)
    }
}