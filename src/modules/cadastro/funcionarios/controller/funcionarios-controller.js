'use strict'

const model = require('../../../../../bin/modelLoader');

exports.listFuncionarios = (req, res) => {

    model.Funcionarios.findAll({
        include: [
            {model: model.uf},
            {model: model.Cidades},
            {model: model.Empresas}
        ]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.getFuncionario = (req, res) => {

    const id = req.params.id;

    model.Funcionarios.findAll({
        include: [
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

exports.getFuncionarioCPF = (req, res) => {

    const vcpf = req.params.pcpf;

    model.Funcionarios.findAll({       
        where: {cpf: vcpf},
        raw: true
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.saveFuncionario = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Funcionarios.create(dados, { transaction: t });           

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

exports.updateFuncionario = async (req, res) => {
    var sequelize = model.sequelize;

    const dados = req.body;
    
    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Salva na tabela
            await model.Funcionarios.update(dados, {
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

exports.deleteFuncionario = async (req, res) => {
    var sequelize = model.sequelize;

    const id = req.params.id;

    let transacao;

    try {
        transacao = await sequelize.transaction(async (t) => {

            //Deleta na tabela
            await model.Funcionarios.destroy({ where: { id: id } }, { transaction: t });

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