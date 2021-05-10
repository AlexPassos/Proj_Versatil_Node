'use strict'

const model = require('../../../../../../bin/modelLoader');

exports.getContas = (req, res) => {

    const idgrupo = req.params.idgrupo;
    const idsubgrupo = req.params.idsubgrupo;

    model.Contas.findAll({
        include: [
            {model: model.Contasdemonstrativos},
            {model: model.Contasgrupo},
            {model: model.Contassubgrupo},
            {model: model.Empresas}
        ],
        where: {contasdemonstrativosID: 1, 
                contasgruposID: idgrupo,
                contassubgruposID: idsubgrupo},
        order: ['codigo']
    }).then((data) => {
        res.send(data);
    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};