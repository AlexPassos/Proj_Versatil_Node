'use strict'

module.exports = (sequelize, DataTypes) => {

    const Contasgrupo = sequelize.define('Contasgrupo', {
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
        tableName: 'contasgrupo',
        timestamps: false,

    })
    Contasgrupo.associate = function (model) {      
        Contasgrupo.belongsTo(model.Contasdemonstrativos, {targetKey: 'id', foreignKey: 'contasdemonstrativosID' })             
        Contasgrupo.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })         
        
        Contasgrupo.belongsToMany(model.Contassubgrupo, {
            through: 'contassubgrupo',
            foreignKey: 'contasgruposID'            
        });

        Contasgrupo.belongsToMany(model.Contas, {
            through: 'contas',
            foreignKey: 'contasgruposID'            
        });
    }

    return Contasgrupo

}