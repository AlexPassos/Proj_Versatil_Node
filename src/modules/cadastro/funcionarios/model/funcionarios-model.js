'use strict'

module.exports = (sequelize, DataTypes) => {

    const Funcionarios = sequelize.define('Funcionarios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        data: {
            type: DataTypes.DATE,
            field: 'data'
        },
        situacao: {
            type: DataTypes.BOOLEAN,
            field: 'situacao'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        cargo: {
            type: DataTypes.STRING,
            field: 'cargo'
        },
        nascimento: {
            type: DataTypes.DATE,
            field: 'nascimento'
        },
        rg: {
            type: DataTypes.STRING,
            field: 'rg'
        },
        cpf: {
            type: DataTypes.STRING,
            field: 'cpf'
        },
        carteira: {
            type: DataTypes.STRING,
            field: 'carteira'
        },
        pis: {
            type: DataTypes.STRING,
            field: 'pis'
        },
        titulo: {
            type: DataTypes.STRING,
            field: 'titulo'
        },
        habilitacao: {
            type: DataTypes.STRING,
            field: 'habilitacao'
        },
        reservista: {
            type: DataTypes.STRING,
            field: 'reservista'
        },
        filiacao: {
            type: DataTypes.STRING,
            field: 'filiacao'
        },
        admissao: {
            type: DataTypes.DATE,
            field: 'admissao'
        },
        demissao: {
            type: DataTypes.DATE,
            field: 'demissao'
        },
        salario: {
            type: DataTypes.DECIMAL(10,2),
            field: 'salario'
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
        celular: {
            type: DataTypes.STRING,
            field: 'celular'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        obs: {
            type: DataTypes.STRING,
            field: 'obs'
        },
        empresaID: {
            type: DataTypes.STRING,
            field: 'empresaID',
            references: {
                model: 'empresas',
                key: 'id'
            }
        },
        nivel: {
            type: DataTypes.STRING,
            field: 'nivel'
        },
        login: {
            type: DataTypes.STRING,
            field: 'login'
        },
        senha: {
            type: DataTypes.STRING,
            field: 'senha'
        },
        acesso: {
            type: DataTypes.BOOLEAN,
            field: 'acesso'
        },

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'funcionarios',
        timestamps: false,

    })
    Funcionarios.associate = function (model) {              
        Funcionarios.belongsTo(model.uf, {targetKey: 'id', foreignKey: 'ufID' })             
        Funcionarios.belongsTo(model.Cidades, {targetKey: 'id', foreignKey: 'cidadeID' })             
        Funcionarios.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })             
    }

    return Funcionarios

}