'use strict'

module.exports = (sequelize, DataTypes) => {

    const Contassubgrupo = sequelize.define('Contassubgrupo', {
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
        tableName: 'contassubgrupo',
        timestamps: false,

    })
    Contassubgrupo.associate = function (model) {      
        Contassubgrupo.belongsTo(model.Contasdemonstrativos, {targetKey: 'id', foreignKey: 'contasdemonstrativosID' })             
        Contassubgrupo.belongsTo(model.Contasgrupo, {targetKey: 'id', foreignKey: 'contasgruposID' })             
        Contassubgrupo.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })        
        
        Contassubgrupo.belongsToMany(model.Contas, {
            through: 'contas',
            foreignKey: 'contassubgruposID'            
        });
    }

    return Contassubgrupo

}