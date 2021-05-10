'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getSituacaotributariacofins = (req, res) => {

    model.Situacao_tributaria_cofins.findAll({      
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};