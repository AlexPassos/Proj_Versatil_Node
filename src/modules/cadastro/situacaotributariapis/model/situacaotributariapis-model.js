'use strict'

module.exports = (sequelize, DataTypes) => {

    const Situacaotributariapis = sequelize.define('Situacao_tributaria_pis', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        codigo: {
            type: DataTypes.STRING,
            field: 'codigo'
        },
        descricao: {
            type: DataTypes.STRING,
            field: 'descricao'
        },

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'situacao_tributaria_pis',
        timestamps: false,

    })
    Situacaotributariapis.associate = function (model) {              
        
        Situacaotributariapis.belongsToMany(model.Estoquecadastro, {
            through: 'estoquecadastro',
            foreignKey: 'tribpisID'            
        });
    }

    return Situacaotributariapis

}