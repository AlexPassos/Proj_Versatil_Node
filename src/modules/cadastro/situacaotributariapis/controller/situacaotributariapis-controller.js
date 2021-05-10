'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getSituacaotributariapis = (req, res) => {

    model.Situacao_tributaria_pis.findAll({      
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};