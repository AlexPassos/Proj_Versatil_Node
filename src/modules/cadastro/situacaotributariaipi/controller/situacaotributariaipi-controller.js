'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getSituacaotributariaipi = (req, res) => {

    model.Situacao_tributaria_ipi.findAll({      
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};