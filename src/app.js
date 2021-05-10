"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const indexRoute = require('./routes/index');
const estados = require('../src/modules/uf/uf');
const cidades = require('../src/modules/cidades/cidades');
const empresas = require('../src/modules/cadastro/empresas/empresas');
const estoquecadastro = require('../src/modules/cadastro/estoquecadastro/estoquecadastro');
const bancos = require('../src/modules/cadastro/bancos/bancos');
const marcas = require('../src/modules/cadastro/marcas/marcas');
const setores = require('../src/modules/cadastro/setores/setores');
const servicos = require('../src/modules/cadastro/servicos/servicos');
const funcionarios = require('../src/modules/cadastro/funcionarios/funcionarios');
const clientes = require('../src/modules/cadastro/clientes/clientes');
const profissoes = require('../src/modules/cadastro/profissoes/profissoes');
const cfop = require('../src/modules/cadastro/cfop/cfop');
const unidades = require('../src/modules/cadastro/unidades/unidades');
const situacaotributaria = require('../src/modules/cadastro/situacaotributaria/situacaotributaria');
const situacaotributariapis = require('../src/modules/cadastro/situacaotributariapis/situacaotributariapis');
const situacaotributariaipi = require('../src/modules/cadastro/situacaotributariaipi/situacaotributariaipi');
const situacaotributariacofins = require('../src/modules/cadastro/situacaotributariacofins/situacaotributariacofins');
const contasdemonstrativos = require('../src/modules/cadastro/planocontas/contasdemonstrativos/contasdemonstrativos');
const contasgrupo = require('../src/modules/cadastro/planocontas/contasgrupo/contasgrupo');
const contassubgrupo = require('../src/modules/cadastro/planocontas/contassubgrupo/contassubgrupo');
const contas = require('../src/modules/cadastro/planocontas/contas/contas');

const app = express();

app.use(express.urlencoded({ extended: false}));// apenas dados simples

app.use(morgan('dev'));
app.use(bodyParser.json());//só recebe json
app.use(bodyParser.urlencoded({ extended: false}));// apenas dados simples

//Habilita o cors
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Controll-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');    
    next();
});

//Carrega as rotas
indexRoute.init(app);
estados.init(app);
cidades.init(app);
empresas.init(app);
estoquecadastro.init(app);
bancos.init(app);
marcas.init(app);
setores.init(app);
servicos.init(app);
funcionarios.init(app);
clientes.init(app);
profissoes.init(app);
contasdemonstrativos.init(app);
contasgrupo.init(app);
contassubgrupo.init(app);
contas.init(app);
cfop.init(app);
unidades.init(app);
situacaotributaria.init(app);
situacaotributariapis.init(app);
situacaotributariaipi.init(app);
situacaotributariacofins.init(app);

//Quanto não encontrar nenhuma rota
app.use((req, res, next) => {
    const err = new Error('Não encontrado');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        } 
    });
});

module.exports = app;