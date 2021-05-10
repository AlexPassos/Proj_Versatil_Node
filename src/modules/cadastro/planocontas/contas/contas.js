'use strict'

const routerContas = require('./routes/contas-routes')

exports.init = (app) => {

    app.use('/', routerContas);

}