'use strict'

module.exports = (sequelize, DataTypes) => {

    const Setores = sequelize.define('Setores', {
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
        tableName: 'setores',
        timestamps: false,

    })
    Setores.associate = function (model) {      
        Setores.belongsTo(model.Empresas, {targetKey: 'id', foreignKey: 'empresaID' })             
    }

    return Setores

}