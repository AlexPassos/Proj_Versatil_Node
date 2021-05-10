'use strict'

const model = require('../../../../../../bin/modelLoader');

exports.getContassubgrupo = (req, res) => {

    const id = req.params.id;

    model.Contassubgrupo.findAll({
        include: [
            {model: model.Contasdemonstrativos},
            {model: model.Contasgrupo},
            {model: model.Empresas}
        ],
        where: {contasdemonstrativosID: 1, contasgruposID: id},
        order: ['codigo']
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};