'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getProfissoes = (req, res) => {

    model.Profissoes.findAll({      
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};