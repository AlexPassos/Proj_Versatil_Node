'use strict'

module.exports = (sequelize, DataTypes) => {

    const Bancos = sequelize.define('Bancos', {
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
        tableName: 'bancos',
        timestamps: false,

    })
    Bancos.associate = function (model) {      
        Bancos.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })             
    }

    return Bancos

}