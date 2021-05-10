'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getSituacaotributaria = (req, res) => {

    model.Situacao_tributaria.findAll({      
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};