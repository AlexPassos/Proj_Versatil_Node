'use strict'

const model = require('../../../../bin/modelLoader');

exports.getCidades = (req, res) => {

    const id = parseInt(req.params.id);

    model.Cidades.findAll({
        include: [
            { model: model.uf }            
        ],
        where:{
            ufID: id,
        },
        order: ['nome']
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};