'use strict'

const routerClientes = require('./routes/clientes-routes')

exports.init = (app) => {

    app.use('/', routerClientes);

}