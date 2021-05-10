'use strict'

module.exports = (sequelize, DataTypes) => {

    const Profissoes = sequelize.define('Profissoes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        descricao: {
            type: DataTypes.STRING,
            field: 'descricao'
        },

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'profissoes',
        timestamps: false,

    })
    Profissoes.associate = function (model) {              
        
        Profissoes.belongsToMany(model.Clientes, {
            through: 'clientes',
            foreignKey: 'profissaoID'            
        });
    }

    return Profissoes

}