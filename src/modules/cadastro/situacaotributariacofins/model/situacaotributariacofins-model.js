'use strict'

module.exports = (sequelize, DataTypes) => {

    const Situacaotributariacofins = sequelize.define('Situacao_tributaria_cofins', {
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
        tableName: 'situacao_tributaria_cofins',
        timestamps: false,

    })
    Situacaotributariacofins.associate = function (model) {              
        
        Situacaotributariacofins.belongsToMany(model.Estoquecadastro, {
            through: 'estoquecadastro',
            foreignKey: 'tribcofinsID'            
        });
    }

    return Situacaotributariacofins

}