'use strict'

module.exports = (sequelize, DataTypes) => {

    const Estoquecadastro = sequelize.define('Estoquecadastro', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        situacao: {
            type: DataTypes.BOOLEAN,
            field: 'situacao'
        },
        datacad: {
            type: DataTypes.DATE,
            field: 'datacad'
        },
        descricao: {
            type: DataTypes.STRING,
            field: 'descricao'
        },
        unidadesID: {
            type: DataTypes.INTEGER,
            field: 'unidadesID',
            references: {
                model: 'unidades',
                key: 'id'
            }
        },
        marcasID: {
            type: DataTypes.INTEGER,
            field: 'marcasID',
            references: {
                model: 'marcas',
                key: 'id'
            }
        },
        ncm: {
            type: DataTypes.STRING,
            field: 'ncm'
        },
        cfopID: {
            type: DataTypes.INTEGER,
            field: 'cfopID',
            references: {
                model: 'cfop',
                key: 'id'
            }
        },
        peso: {
            type: DataTypes.DECIMAL(10,2),
            field: 'peso'
        },
        comissao: {
            type: DataTypes.DECIMAL(10,2),
            field: 'comissao'
        },
        valor: {
            type: DataTypes.DECIMAL(10,2),
            field: 'valor'
        },
        obs: {
            type: DataTypes.STRING,
            field: 'obs'
        },
        tribicmsID: {
            type: DataTypes.INTEGER,
            field: 'tribicmsID',
            references: {
                model: 'situacaotributaria',
                key: 'id'
            }
        },
        aliquotacredito: {
            type: DataTypes.STRING,
            field: 'aliquotacredito'
        },
        aliquotabaseicms: {
            type: DataTypes.STRING,
            field: 'aliquotabaseicms'
        },
        aliquotaicms: {
            type: DataTypes.STRING,
            field: 'aliquotaicms'
        },
        pautafiscal: {
            type: DataTypes.STRING,
            field: 'pautafiscal'
        },
        aliquotabaseicmsst: {
            type: DataTypes.STRING,
            field: 'aliquotabaseicmsst'
        },
        aliquotaicmsst: {
            type: DataTypes.STRING,
            field: 'aliquotaicmsst'
        },
        tribpisID: {
            type: DataTypes.INTEGER,
            field: 'tribpisID',
            references: {
                model: 'situacaotributariapis',
                key: 'id'
            }
        },
        aliquotapis: {
            type: DataTypes.STRING,
            field: 'aliquotapis'
        },
        tribcofinsID: {
            type: DataTypes.INTEGER,
            field: 'tribcofinsID',
            references: {
                model: 'situacaotributariacofins',
                key: 'id'
            }
        },
        aliquotacofins: {
            type: DataTypes.STRING,
            field: 'aliquotacofins'
        },
        tribipiID: {
            type: DataTypes.INTEGER,
            field: 'tribipiID',
            references: {
                model: 'situacaotributariaipi',
                key: 'id'
            }
        },
        aliquotaipi: {
            type: DataTypes.STRING,
            field: 'aliquotaipi'
        },
        aliquotaiss: {
            type: DataTypes.STRING,
            field: 'aliquotaiss'
        },
        cod: {
            type: DataTypes.STRING,
            field: 'cod'
        },       
        empresaID: {
            type: DataTypes.STRING,
            field: 'empresaID',
            references: {
                model: 'empresas',
                key: 'id'
            }
        },
        cest: {
            type: DataTypes.STRING,
            field: 'cest'
        },      

    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'estoquecadastro',
        timestamps: false,

    })
    Estoquecadastro.associate = function (model) {              
        Estoquecadastro.belongsTo(model.Unidades, {tancmetKey: 'id', foreignKey: 'unidadesID' })             
        Estoquecadastro.belongsTo(model.Marcas, {tancmetKey: 'id', foreignKey: 'marcasID' })             
        Estoquecadastro.belongsTo(model.Cfop, {tancmetKey: 'id', foreignKey: 'cfopID' })             
        Estoquecadastro.belongsTo(model.Situacao_tributaria, {tancmetKey: 'id', foreignKey: 'tribicmsID' })             
        Estoquecadastro.belongsTo(model.Situacao_tributaria_cofins, {tancmetKey: 'id', foreignKey: 'tribcofinsID' })             
        Estoquecadastro.belongsTo(model.Situacao_tributaria_ipi, {tancmetKey: 'id', foreignKey: 'tribipiID' })             
        Estoquecadastro.belongsTo(model.Situacao_tributaria_pis, {tancmetKey: 'id', foreignKey: 'tribpisID' })             
        Estoquecadastro.belongsTo(model.Empresas, {tancmetKey: 'id', foreignKey: 'empresaID' })             
    }

    return Estoquecadastro

}