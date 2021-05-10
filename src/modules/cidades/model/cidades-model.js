'use strict'

module.exports = (sequelize, DataTypes) => {

    const Cidades = sequelize.define('Cidades', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        codibge: {
            type: DataTypes.STRING,
            field: 'codibge'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        ufID: {
            type: DataTypes.INTEGER,
            field: 'ufID',
            references: {
                model: 'uf',
                key: 'id'
            }
        }

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'cidades',
        timestamps: false,

    })
    Cidades.associate = function (model) {      
        Cidades.belongsTo(model.uf, {targetKey: 'id', foreignKey: 'ufID' })     

        Cidades.belongsToMany(model.Empresas, {
            through: 'empresas',
            foreignKey: 'cidadeID'            
        });
        Cidades.belongsToMany(model.Funcionarios, {
            through: 'funcionarios',
            foreignKey: 'cidadeID'            
        });
        Cidades.belongsToMany(model.Clientes, {
            through: 'clientes',
            foreignKey: 'cidadeID'            
        });
    }

    return Cidades

}