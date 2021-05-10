'use strict'

const routerFuncionarios = require('./routes/funcionarios-routes')

exports.init = (app) => {

    app.use('/', routerFuncionarios);

}