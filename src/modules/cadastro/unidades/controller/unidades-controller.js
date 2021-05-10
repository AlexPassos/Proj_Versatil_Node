'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getUnidades = (req, res) => {

    model.Unidades.findAll({      
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};