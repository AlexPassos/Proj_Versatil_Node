'use strict'

module.exports = (sequelize, DataTypes) => {

    const Situacaotributariaipi = sequelize.define('Situacao_tributaria_ipi', {
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
        tableName: 'situacao_tributaria_ipi',
        timestamps: false,

    })
    Situacaotributariaipi.associate = function (model) {              
        
        Situacaotributariaipi.belongsToMany(model.Estoquecadastro, {
            through: 'estoquecadastro',
            foreignKey: 'tribipiID'            
        });
    }

    return Situacaotributariaipi

}