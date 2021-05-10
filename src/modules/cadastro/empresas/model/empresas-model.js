'use strict'

module.exports = (sequelize, DataTypes) => {

    const Empresas = sequelize.define('Empresas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        razao: {
            type: DataTypes.STRING,
            field: 'razao'
        },
        fantasia: {
            type: DataTypes.STRING,
            field: 'fantasia'
        },
        ie: {
            type: DataTypes.STRING,
            field: 'ie'
        },
        cnpj: {
            type: DataTypes.STRING,
            field: 'cnpj'
        },
        endereco: {
            type: DataTypes.STRING,
            field: 'endereco'
        },
        numero: {
            type: DataTypes.STRING,
            field: 'numero'
        },
        complemento: {
            type: DataTypes.STRING,
            field: 'complemento'
        },
        bairro: {
            type: DataTypes.STRING,
            field: 'bairro'
        },
        cidadeID: {
            type: DataTypes.INTEGER,
            field: 'cidadeID',
            references: {
                model: 'cidades',
                key: 'id'
            }
        },
        ufID: {
            type: DataTypes.INTEGER,
            field: 'ufID',
            references: {
                model: 'uf',
                key: 'id'
            }
        },
        cep: {
            type: DataTypes.STRING,
            field: 'cep'
        },
        telefone: {
            type: DataTypes.STRING,
            field: 'telefone'
        },
        fax: {
            type: DataTypes.STRING,
            field: 'fax'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },


    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'empresas',
        timestamps: false,

    })
    
    Empresas.associate = function (model) {      
        Empresas.belongsTo(model.Cidades, {targetKey: 'id', foreignKey: 'cidadeID' })     
        Empresas.belongsTo(model.uf, {targetKey: 'id', foreignKey: 'ufID' })     

        Empresas.belongsToMany(model.Cidades, {
            through: 'bancos',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Marcas, {
            through: 'marcas',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Setores, {
            through: 'setores',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Servicos, {
            through: 'servicos',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Funcionarios, {
            through: 'funcionarios',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Clientes, {
            through: 'clientes',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Contasgrupo, {
            through: 'contasgrupo',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Contassubgrupo, {
            through: 'contassubgrupo',
            foreignKey: 'empresaID'            
        });
        Empresas.belongsToMany(model.Contas, {
            through: 'contas',
            foreignKey: 'empresaID'            
        });
        
    }

    return Empresas

}