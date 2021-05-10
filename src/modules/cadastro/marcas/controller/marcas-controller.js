'use strict'

const model = require('../../../../../bin/modelLoader');

exports.listMarcas = (req, res) => {

    model.Marcas.findAll({
        include: [
            {model: model.Empresas}
        ]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.getMarca = (req, res) => {

    const id = req.params.id;

    model.Marcas.findAll({
        include: [
            {model: model.Empresas}
        ],
        where: [id = id]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.saveMarca = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Marcas.create(dados, { transaction: t });           

        }).then(r => {
            console.log(r);
        }).catch(err => {
            console.log(err);
        });

        return res.send({
            mensagem: 'Cadastro realizado com sucesso!'
        });
    } catch (e) {
        if (transacao) await transacao.rollback();
        console.log(e);
        return res.send({
            mensagem: 'Falha no cadastro'});
    }
};  

exports.updateMarca = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;
    
    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Marcas.update(dados, {
                where: {
                    id: req.body.id
                }
            }, { transaction: t });           

        }).then(r => {
            //console.log(r);
        }).catch(err => {
            //console.log(err);
        });

        return res.send({mensagem : 'Operação realizada com sucesso!'});
    } catch (e) {
        if (transacao) await transacao.rollback();
        //console.log(e);
        return res.send({mensagem: 'Falha no cadastro'});
    }
};  

exports.deleteMarca = async (req, res) => {
    var sequelize = model.sequelize;

    const id = req.params.id;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Deleta na tabela
            await model.Marcas.destroy({ where: { id: id } }, { transaction: t });

        }).then(r => {
            //console.log(r);
        }).catch(err => {
            //console.log(err);
        });

        return res.send({mensagem: 'Removido realizado com sucesso!'});
    } catch (e) {        
        if (transacao) await transacao.rollback();
        //console.log(e);
        return res.send({mensagem: 'Falha no cadastro'});
    }
};  