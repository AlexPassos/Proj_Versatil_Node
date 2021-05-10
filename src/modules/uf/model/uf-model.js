'use strict'

module.exports = (sequelize, DataTypes) => {

    const Uf = sequelize.define('uf', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        sigla: {
            type: DataTypes.STRING,
            field: 'sigla'
        },
        estado: {
            type: DataTypes.STRING,
            field: 'estado'
        }

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'uf',
        timestamps: false,

    })
    Uf.associate = function (model) {              
        Uf.belongsToMany(model.Cidades, {
            through: 'cidades',
            foreignKey: 'ufID'            
        });
     
        Uf.belongsToMany(model.Empresas, {
            through: 'empresas',
            foreignKey: 'ufID'            
        });
     
        Uf.belongsToMany(model.Funcionarios, {
            through: 'funcionarios',
            foreignKey: 'ufID'            
        });

        Uf.belongsToMany(model.Clientes, {
            through: 'clientes',
            foreignKey: 'ufID'            
        });
    }

    return Uf

}