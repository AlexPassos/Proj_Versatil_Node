'use strict'

const routerContassubgrupo = require('./routes/contassubgrupo-routes')

exports.init = (app) => {

    app.use('/', routerContassubgrupo);

}