'use strict'

const env = process.env.NODE_ENV || "development";
const config = require('../config/config.json')[env];
const path = require("path");
let Sequelize = require("sequelize");

//Criando a conexão com o banco de dados de acordo com a configuração do config.json
let db = {};
let sequelize = new Sequelize(config.database, config.username, config.password, config);

//Criando um array do caminho dos modelos
const models = [
    '../src/modules/uf/model/uf-model',
    '../src/modules/cidades/model/cidades-model',
    '../src/modules/cadastro/empresas/model/empresas-model',
    '../src/modules/cadastro/estoquecadastro/model/estoquecadastro-model',
    '../src/modules/cadastro/bancos/model/bancos-model',
    '../src/modules/cadastro/marcas/model/marcas-model',
    '../src/modules/cadastro/setores/model/setores-model',
    '../src/modules/cadastro/servicos/model/servicos-model',
    '../src/modules/cadastro/funcionarios/model/funcionarios-model',
    '../src/modules/cadastro/clientes/model/clientes-model',
    '../src/modules/cadastro/profissoes/model/profissoes-model',
    '../src/modules/cadastro/cfop/model/cfop-model',
    '../src/modules/cadastro/unidades/model/unidades-model',
    '../src/modules/cadastro/situacaotributaria/model/situacaotributaria-model',
    '../src/modules/cadastro/situacaotributariapis/model/situacaotributariapis-model',
    '../src/modules/cadastro/situacaotributariaipi/model/situacaotributariaipi-model',
    '../src/modules/cadastro/situacaotributariacofins/model/situacaotributariacofins-model',
    '../src/modules/cadastro/planocontas/contasdemonstrativos/model/contasdemonstrativos-model',
    '../src/modules/cadastro/planocontas/contasgrupo/model/contasgrupo-model',
    '../src/modules/cadastro/planocontas/contassubgrupo/model/contassubgrupo-model',
    '../src/modules/cadastro/planocontas/contas/model/contas-model',
    
];

let l = models.length;

//Irá importar os modelos para o sequelize
for (let i = 0; i < l; i++) {
    let model = sequelize.import(path.join(models[i]));
    db[model.name] = model;
}

//Irá percorrer e separar apenas o objeto que contém a propriedade associate, 
//sem o "associate" o sequelize não monta uma relação!
Object.keys(db).forEach((modelName) => {
    if ("associate" in db[modelName])
        db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;