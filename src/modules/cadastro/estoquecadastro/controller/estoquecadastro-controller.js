'use strict'

const model = require('../../../../../bin/modelLoader');

exports.listProdutos = (req, res) => {

    model.Estoquecadastro.findAll({
        include: [
            {model: model.Unidades},
            {model: model.Marcas},
            {model: model.Cfop},
            {model: model.Situacao_tributaria},
            {model: model.Situacao_tributaria_cofins},
            {model: model.Situacao_tributaria_ipi},
            {model: model.Situacao_tributaria_pis},
            {model: model.Empresas}
        ]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.getProduto = (req, res) => {

    const id = req.params.id;

    model.Estoquecadastro.findAll({
        include: [
            {model: model.Unidades},
            {model: model.Marcas},
            {model: model.Cfop},
            {model: model.Situacao_tributaria},
            {model: model.Situacao_tributaria_cofins},
            {model: model.Situacao_tributaria_ipi},
            {model: model.Situacao_tributaria_pis},
            {model: model.Empresas}
        ],
        where: {id: id}
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.saveProduto = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Estoquecadastro.create(dados, { transaction: t });           

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

exports.updateProduto = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;
    
    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Estoquecadastro.update(dados, {
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

exports.deleteProduto = async (req, res) => {
    var sequelize = model.sequelize;

    const id = req.params.id;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Deleta na tabela
            await model.Estoquecadastro.destroy({ where: { id: id } }, { transaction: t });

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