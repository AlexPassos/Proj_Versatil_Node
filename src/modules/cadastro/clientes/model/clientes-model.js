'use strict'

module.exports = (sequelize, DataTypes) => {

    const Clientes = sequelize.define('Clientes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        datacad: {
            type: DataTypes.DATE,
            field: 'datacad'
        },
        tipo: {
            type: DataTypes.INTEGER,
            field: 'tipo'
        },
        situacao: {
            type: DataTypes.BOOLEAN,
            field: 'situacao'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        sexo: {
            type: DataTypes.INTEGER,
            field: 'sexo'
        },
        nascimento: {
            type: DataTypes.DATE,
            field: 'nascimento'
        },
        civil: {
            type: DataTypes.INTEGER,
            field: 'civil'
        },
        profissaoID: {
            type: DataTypes.INTEGER,
            field: 'profissaoID',
            references: {
                model: 'profissoes',
                key: 'id'
            }
        },
        fantasia: {
            type: DataTypes.STRING,
            field: 'fantasia'
        },
        rgie: {
            type: DataTypes.STRING,
            field: 'rgie'
        },
        orgaoemissor: {
            type: DataTypes.STRING,
            field: 'orgaoemissor'
        },
        dataemissao: {
            type: DataTypes.DATE,
            field: 'dataemissao'
        },
        cpfcnpj: {
            type: DataTypes.STRING,
            field: 'cpfcnpj'
        },
        sitlimite: {
            type: DataTypes.BOOLEAN,
            field: 'sitlimite'
        },
        limite: {
            type: DataTypes.DECIMAL(10,2),
            field: 'limite'
        },
        endereco: {
            type: DataTypes.STRING,
            field: 'endereco'
        },
        numero: {
            type: DataTypes.STRING,
            field: 'numero'
        },
        complemento: {
            type: DataTypes.STRING,
            field: 'complemento'
        },
        bairro: {
            type: DataTypes.STRING,
            field: 'bairro'
        },
        cidadeID: {
            type: DataTypes.INTEGER,
            field: 'cidadeID',
            references: {
                model: 'cidades',
                key: 'id'
            }
        },
        ufID: {
            type: DataTypes.INTEGER,
            field: 'ufID',
            references:{
                model: 'uf',
                key: 'id'
            }
        },
        cep: {
            type: DataTypes.STRING,
            field: 'cep'
        },
        telefone: {
            type: DataTypes.STRING,
            field: 'telefone'
        },
        celularfax: {
            type: DataTypes.STRING,
            field: 'celularfax'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        obs: {
            type: DataTypes.STRING,
            field: 'obs'
        },
        cod: {
            type: DataTypes.STRING,
            field: 'cod'
        },
        empresaID: {
            type: DataTypes.STRING,
            field: 'empresaID',
            references: {
                model: 'empresas',
                key: 'id'
            }
        },
       

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'clientes',
        timestamps: false,

    })
    Clientes.associate = function (model) {      
        Clientes.belongsTo(model.Profissoes, {targetKey: 'id', foreignKey: 'profissaoID' })             
        Clientes.belongsTo(model.uf, {targetKey: 'id', foreignKey: 'ufID' })             
        Clientes.belongsTo(model.Cidades, {targetKey: 'id', foreignKey: 'cidadeID' })             
        Clientes.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })             
    }

    return Clientes

}