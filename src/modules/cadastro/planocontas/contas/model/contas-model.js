'use strict'

module.exports = (sequelize, DataTypes) => {

    const Contas = sequelize.define('Contas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        contasdemonstrativosID: {
            type: DataTypes.INTEGER,
            field: 'contasdemonstrativosID',
            references: {
                model: 'contasdemonstrativos',
                key: 'id'
            }
        },
        contasgruposID: {
            type: DataTypes.INTEGER,
            field: 'contasgruposID',
            references: {
                model: 'contasgrupo',
                key: 'id'
            }
        },
        contassubgruposID: {
            type: DataTypes.INTEGER,
            field: 'contassubgruposID',
            references: {
                model: 'contassubgrupo',
                key: 'id'
            }
        },
        codigo: {
            type: DataTypes.INTEGER,
            field: 'codigo'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        caixa: {
            type: DataTypes.BOOLEAN,
            field: 'caixa'
        },
        lucro: {
            type: DataTypes.BOOLEAN,
            field: 'lucro'
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
        tableName: 'contas',
        timestamps: false,

    })
    Contas.associate = function (model) {      
        Contas.belongsTo(model.Contasdemonstrativos, {targetKey: 'id', foreignKey: 'contasdemonstrativosID' })             
        Contas.belongsTo(model.Contasgrupo, {targetKey: 'id', foreignKey: 'contasgruposID' })             
        Contas.belongsTo(model.Contassubgrupo, {targetKey: 'id', foreignKey: 'contassubgruposID' })             
        Contas.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })             
    }

    return Contas

}