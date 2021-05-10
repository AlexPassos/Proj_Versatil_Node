'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getCfop = (req, res) => {

    model.Cfop.findAll({      
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};