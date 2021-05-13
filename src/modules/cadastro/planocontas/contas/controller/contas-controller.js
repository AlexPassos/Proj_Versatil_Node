'use strict'

const model = require('../../../../../../bin/modelLoader');

exports.listContas = (req, res) => {

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


exports.getConta = (req, res) => {

    const id = req.params.id;

    model.Contas.findAll({
        include: [
            {model: model.Contasdemonstrativos},
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

exports.getMaxCodigo = (req, res) => {

    var sequelize = model.sequelize;

    const idgrupo = req.params.idgrupo;
    const idsubgrupo = req.params.idsubgrupo;

    model.Contas.findAll({
        where: {
            contasdemonstrativosID: 1, 
            contasgruposID: idgrupo,
            contassubgruposID: idsubgrupo},
        attributes: [
            [sequelize.fn('max', sequelize.col('codigo')), 'codigo'],          
        ],      
        raw: true
    }).then((data) => {

        res.json({data});

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.saveConta = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Contas.create(dados, { transaction: t });           

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

exports.updateConta = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;
    
    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Contas.update(dados, {
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

exports.deleteConta = async (req, res) => {
    var sequelize = model.sequelize;

    const id = req.params.id;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Deleta na tabela
            await model.Contas.destroy({ where: { id: id } }, { transaction: t });

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