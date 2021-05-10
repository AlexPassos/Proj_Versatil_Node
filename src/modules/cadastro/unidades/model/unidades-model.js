'use strict'

module.exports = (sequelize, DataTypes) => {

    const Unidades = sequelize.define('Unidades', {
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
        tableName: 'unidades',
        timestamps: false,

    })
    Unidades.associate = function (model) {              
        
        Unidades.belongsToMany(model.Estoquecadastro, {
            through: 'estoquecadastro',
            foreignKey: 'unidadesID'            
        });
    }

    return Unidades

}