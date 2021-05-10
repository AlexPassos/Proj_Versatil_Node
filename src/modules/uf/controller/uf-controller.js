'use strict'

const model = require('../../../../bin/modelLoader');

exports.getEstados =  (req, res) => {

    model.uf.findAll({
        order: ['estado']
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
    
};