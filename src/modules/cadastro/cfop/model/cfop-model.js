'use strict'

module.exports = (sequelize, DataTypes) => {

    const Cfop = sequelize.define('Cfop', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        cfop: {
            type: DataTypes.STRING,
            field: 'cfop'
        },

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'cfop',
        timestamps: false,

    })
     Cfop.associate = function (model) {              
        
         Cfop.belongsToMany(model.Estoquecadastro, {
             through: 'estoquecadastro',
             foreignKey: 'cfopID'            
         });
     }

    return Cfop

}