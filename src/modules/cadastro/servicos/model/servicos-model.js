'use strict'

module.exports = (sequelize, DataTypes) => {

    const Servicos = sequelize.define('Servicos', {
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
        valor: {
            type: DataTypes.DECIMAL(10,2),
            field: 'valor'
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
        tableName: 'servicos',
        timestamps: false,

    })
    Servicos.associate = function (model) {      
        Servicos.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })             
    }

    return Servicos

}