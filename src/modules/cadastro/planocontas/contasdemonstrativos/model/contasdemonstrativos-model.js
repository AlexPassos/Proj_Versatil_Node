'use strict'

module.exports = (sequelize, DataTypes) => {

    const Contasdemonstrativos = sequelize.define('Contasdemonstrativos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'contasdemonstrativos',
        timestamps: false,

    })
    Contasdemonstrativos.associate = function (model) {              
        
        Contasdemonstrativos.belongsToMany(model.Contasgrupo, {
            through: 'contasgrupo',
            foreignKey: 'contasdemonstrativosID'            
        });

        Contasdemonstrativos.belongsToMany(model.Contassubgrupo, {
            through: 'contassubgrupo',
            foreignKey: 'contasdemonstrativosID'            
        });

        Contasdemonstrativos.belongsToMany(model.Contas, {
            through: 'contas',
            foreignKey: 'contasdemonstrativosID'            
        });
    }

    return Contasdemonstrativos

}