'use strict'

module.exports = (sequelize, DataTypes) => {

    const Situacaotributaria = sequelize.define('Situacao_tributaria', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        sitr_pkey: {
            type: DataTypes.STRING,
            field: 'sitr_pkey'
        },
        sitr_desc: {
            type: DataTypes.STRING,
            field: 'sitr_desc'
        },
        sitr_tipo: {
            type: DataTypes.STRING,
            field: 'sitr_tipo'
        },

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'situacao_tributaria',
        timestamps: false,

    })
    Situacaotributaria.associate = function (model) {              
        
        Situacaotributaria.belongsToMany(model.Estoquecadastro, {
            through: 'estoquecadastro',
            foreignKey: 'tribicmsID'            
        });
    }

    return Situacaotributaria

}