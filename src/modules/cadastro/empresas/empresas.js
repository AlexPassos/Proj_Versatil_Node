'use strict'

const routerEmpresas = require('./routes/empresas-routes')

exports.init = (app) => {

    app.use('/', routerEmpresas);

}