'use strict'

const model = require('../../../../../../bin/modelLoader');

exports.getContasdemonstrativos = (req, res) => {

    model.Contasdemonstrativos.findAll({      
        where: {id: 1}
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};